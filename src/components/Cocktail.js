import React from 'react';
import {  
    Link
  } from 'react-router-dom';

const Cocktail = (props)=>{
    return <div className="cocktailItem">
        <img src={props.strDrinkThumb} alt={props.strDrink}/>
        <Link to={props.categoryid + "/" + props.idDrink} onClick={props.viewCocktailHandle}><h4>{props.strDrink}</h4></Link>  
    </div>;
}

export default Cocktail;