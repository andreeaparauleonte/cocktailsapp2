import React, {Component,useState} from 'react';
import { Formik } from 'formik';
import {   
    Link
  } from 'react-router-dom';

const AddCocktailFormik  = (props) => {
      
    const [formular,setFormular] = useState({
        image : null,
        name: "andreea's special",
        ingredient1:"votca",
        ingredient2:"orange juice",
        quantity:2

    });

    const handleChange = (e) => {
        console.log("in handle");
                setFormular({...formular,
            [e.target.name] : e.target.value
        });
    };

        return (<div>
            <h1>My Form</h1>
            <Formik
              /*initialValues={{ name: "andreea's special", ingredient1: "votca", ingredient2 :"orange juice", quantity: 2 }}*/
              onSubmit={(values, actions) => {
                  console.log(formular);
                    var newCocktail = {strDrink:formular.name, strDrinkThumb:formular.image, idDrink:"1000001"};
                    props.doAddCocktail(newCocktail);
                    props.history.goBack();
                
              }}
              onChange = {(e) => {
                  console.log("changed ");
                  if(e.target.name ==="pic"){
                      console.log("pic handleChange");
                  }
                  else{
                    setFormular({...formular,
                        [e.target.name] : e.target.value
                    });
                  }
                
              }}
              render={formikProps=> (
                  <div className="categoryContainer">
                  
                      <form onSubmit={formikProps.handleSubmit}>
                          <div className="imageDiv">
                              <input type="file" name="pic" accept="image/*" onChange={(event)=>{
                                    if (event.target.files && event.target.files[0]) {
                                        let reader = new FileReader();
                                        reader.onload = (e) => {
                                            setFormular({"image":e.target.result});
                                        };
                                        reader.readAsDataURL(event.target.files[0]);
                                    }

                              }} />
                              <img src={formular.image} alt="select image"/>
                          </div>
                          <div className="detailsDiv">
                              <div className="rowForm">
                                  <label>Name</label>
                                  <input type="text" name="name" onChange={handleChange} onBlur={formikProps.handleBlur} value={formular.name} />
                              </div>
                              <div className="rowForm">
                                  <label>Ingredient 1</label>
                                  <input type="text" name="ingredient1" onChange={handleChange} onBlur={formikProps.handleBlur} value={formular.ingredient1}/>
                              </div>
                              <div className="rowForm">
                                  <label>Ingredient 2</label>
                                  <input type="text" name="ingredient2" onChange={handleChange} onBlur={formikProps.handleBlur} value={formular.ingredient2}/>
                              </div>
                              <div className="rowForm">
                                  <label>Quantity</label>
                                  <input type="text" name="quantity" onChange={handleChange} onBlur={formikProps.handleBlur} value={formular.quantity}/>
                              </div>
                              <div className="rowForm">
                                  <button type="submit">Submit</button>
                              </div>
                          </div>
                      </form>
                      <Link to={props.back}> <button className="backButton" /*onClick={props.history.goBack}*/>Back</button></Link>
                  </div>
              )}
            />
          </div>)
}

/**
 * class AddCocktailFormik  extends Component{
    constructor(props){
        super(props);
        this.state ={
            image: null
        }
        this.onImageChange = this.onImageChange.bind(this);
    }

      onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
          let reader = new FileReader();
          reader.onload = (e) => {
            this.setState({image: e.target.result});
          };
          reader.readAsDataURL(event.target.files[0]);
        }
      }

    render(){
        return (<div>
            <h1>My Form</h1>
            <Formik
              initialValues={{ name: "andreea's special", ingredient1: "votca", ingredient2 :"orange juice", quantity: 2 }}
              onSubmit={(values, actions) => {
                    var newCocktail = {strDrink:values.name, strDrinkThumb:this.state.image, idDrink:"1000001"};
                    this.props.doAddCocktail(newCocktail);
                    this.props.history.goBack();
                
              }}
              render={formikProps=> (
                  <div className="categoryContainer">
                  
                      <form onSubmit={formikProps.handleSubmit}>
                          <div className="imageDiv">
                              <input type="file" name="pic" accept="image/*" onChange={this.onImageChange} />
                              <img src={this.state.image} alt="select image"/>
                          </div>
                          <div className="detailsDiv">
                              <div className="rowForm">
                                  <label>Name</label>
                                  <input type="text" name="name" onChange={formikProps.handleChange} onBlur={formikProps.handleBlur} value={formikProps.values.name}/>
                              </div>
                              <div className="rowForm">
                                  <label>Ingredient 1</label>
                                  <input type="text" name="ingredient1" onChange={formikProps.handleChange} onBlur={formikProps.handleBlur} value={formikProps.values.ingredient1}/>
                              </div>
                              <div className="rowForm">
                                  <label>Ingredient 2</label>
                                  <input type="text" name="ingredient2" onChange={formikProps.handleChange} onBlur={formikProps.handleBlur} value={formikProps.values.ingredient2}/>
                              </div>
                              <div className="rowForm">
                                  <label>Quantity</label>
                                  <input type="text" name="quantity" onChange={formikProps.handleChange} onBlur={formikProps.handleBlur} value={formikProps.values.quantity}/>
                              </div>
                              <div className="rowForm">
                                  <button type="submit">Submit</button>
                              </div>
                          </div>
                      </form>
                      <button className="backButton" onClick={this.props.history.goBack}>Back</button>
                  </div>
              )}
            />
          </div>)
    }
}
 */

  export default AddCocktailFormik;