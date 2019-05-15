import React, { Component } from 'react';
import './Category.css';
import axios from 'axios';
import {   
    Route,
    Link,
    Switch
  } from 'react-router-dom';

import Cocktail from './Cocktail';
import CocktailView from './CocktailView';
import AddCocktailFormik from './AddCocktailFormik';

class Category extends Component {
    state = {
        cocktails: []
    }

    componentDidMount(){
        let url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?' + this.props.filterType + '=' + this.props.filterBy;
        axios.get(url).then(response => {
            this.setState({cocktails : response.data.drinks })
            }
        );     
    }

    addCocktailToState(cocktail){
        this.setState(prevState => ({
            cocktails: [...prevState.cocktails, cocktail]
          }))
    }

    render(){
        let categoryid= this.props.matchCategory.params.id;
              
        return (<Switch>
                    <Route path={"/"+categoryid + "/add-cocktail"} render={() => 
                        {return (<AddCocktailFormik doAddCocktail={this.addCocktailToState.bind(this)} history={this.props.history} />)}}/>     
                    
                    <Route exact path={"/" + categoryid+"/:id"} render={(props) => {
                            let cocktailId = props.match.params.id;                         
                            let cocktail = this.state.cocktails.filter(x=>x.idDrink === cocktailId)[0];
                            return (<CocktailView {...cocktail} history={this.props.history} />)
                        }} />
                                
                    <Route path={"/" + categoryid} render={()=> {
                            let cocktails = this.state.cocktails.map((cocktail, index) => 
                                {return <Cocktail {...cocktail} key={cocktail.idDrink} categoryid={categoryid}/>                        
                            });
                            return (<div className="categoryContainer">
                                        <div className="categoryTitle">{this.props.name}</div>          
                                        {cocktails}
                                        <Link className="AddCocktailButton" to={ "/"+categoryid + "/add-cocktail"} > Add</Link>
                                    </div>)
                            }}/>                                      
         </Switch>       
        );
        }
}

export default Category;