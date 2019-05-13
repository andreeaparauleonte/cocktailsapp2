import React from 'react';

const CocktailDetails = (props) =>{

    return <div className="categoryContainer">
    <div className="categoryTitle">Details</div>         
    <div className="imageDiv">
      <button className="cancelDetailsButton" onClick={props.cancelDetailsCocktail}>Hide details</button>
      <img src={props.strDrinkThumb} alt={props.strDrink}/>
    </div>
    <div className="detailsDiv">
      <p>{props.strDrink}</p>
      <p>{props.idDrink}</p>
    </div>
</div>
}

export default CocktailDetails;