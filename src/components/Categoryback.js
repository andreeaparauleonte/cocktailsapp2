import React, { Component } from 'react';
import './Category.css';
import axios from 'axios';
import {   
    Route,
    Link,
    Switch
  } from 'react-router-dom';

import Cocktail from './Cocktail';

class Categoryback extends Component {
    state = {
        cocktails: []
    }

    componentDidMount(){
        let url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?' + this.props.filterType + '=' + this.props.filterBy;
        axios.get(url).then(response => {
            this.setState({cocktails : response.data.drinks })
            }
        );
        this.props.resetViewsState();
    }

    handlePictureClick = (cocktail, e) => {
        this.props.onPictureClick(cocktail);
    }
    handleTitleClick = (cocktail, e) => {
        this.props.onTitleClick(cocktail);
    }

    render(){
        console.log(this.props);
        let cocktails = this.state.cocktails.map(
            (cocktail, index) => 
            {return  <Link to={this.props.id + "/" + cocktail.idDrink}>
            <Cocktail {...cocktail} 
                        key={cocktail.idDrink} 
                        cocktail={cocktail} 
                        onPictureClick={this.handlePictureClick.bind(this,cocktail)}
                        onTitleClick={this.handleTitleClick.bind(this, cocktail)}/>
                        </Link>
        });
        
        let classNameContainer = this.props.hide? "categoryContainer hidden" : "categoryContainer";
        
        return (
        <div className={classNameContainer}>
            <div className="categoryTitle">
              {this.props.name}  
            </div>
         {cocktails}
         <Link to="/alcoholic">test scroll</Link>
         <Switch>
             <Route path="$/{props.match.path}/:id"></Route>
         </Switch>
         
        </div>
        );
}
}

export default Categoryback;