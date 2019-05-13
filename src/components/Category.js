import React, { Component } from 'react';
import './Category.css';
import axios from 'axios';
import {   
    Route,
    Link,
    Switch
  } from 'react-router-dom';

import Cocktail from './Cocktail';
import CocktailDetails from './CocktailDetails';

class Category extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        cocktails: []
    }

    componentDidMount(){
        let url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?' + this.props.filterType + '=' + this.props.filterBy;
        axios.get(url).then(response => {
            this.setState({cocktails : response.data.drinks })
            }
        );
        this.props.resetViewsState(this.props.id);
        
    }

    viewCocktailHandle = (cocktail,categoryid, e) => {
        this.props.viewCocktailHandle(cocktail, categoryid);
    }

    render(){
        let categoryid= this.props.id;
        
        let cocktails = this.state.cocktails.map(
            (cocktail, index) => 
            {return <Cocktail {...cocktail} 
                        key={cocktail.idDrink} 
                        matchCategory={categoryid}
                        viewCocktailHandle={this.viewCocktailHandle.bind(this, cocktail)} 
                        />
                        
        });
        
        let classNameContainer = this.props.hide? "categoryContainer hidden" : "categoryContainer";
        
        return (
        <div className={classNameContainer}>
            <div className="categoryTitle">
              {this.props.name}  
            </div>
         {cocktails}
         <Link to={ "/"+categoryid + "/add-cocktail"}> Add cocktail</Link>
         <Switch>
            <Route exact path={"/"+categoryid + "/add-cocktail"} render={()=> {console.log("in route"); return (<div>FOUNT ROUTE</div>)}}></Route> 
             <Route path={`$/{props.match.path}/:id`}></Route>
         </Switch>
         
        </div>
        );
}
}

export default Category;