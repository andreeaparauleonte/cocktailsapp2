import React,{Fragment} from 'react';
import {  
  Link
} from 'react-router-dom';

const CocktailView = (props) => {
  console.log(props);
    return <Fragment>
        <div className="viewCocktail">
          <h2>{props.strDrink}</h2>
          <img src={props.strDrinkThumb} alt={props.strDrink}/>          
        </div>
        <Link to={"/" + props.backLocation}><button className="backButton" onClick={props.cancelViewCocktail}>Back</button></Link>
        </Fragment>
}

export default CocktailView;