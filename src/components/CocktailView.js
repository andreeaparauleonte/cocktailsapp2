import React,{Fragment} from 'react';

const CocktailView = (props) => {
    return <Fragment>
        <div className="viewCocktail">
          <h2>{props.strDrink}</h2>
          <img src={props.strDrinkThumb} alt={props.strDrink}/>          
        </div>
        <button className="backButton" onClick={props.history.goBack}>Back</button>
        </Fragment>
}

export default CocktailView;