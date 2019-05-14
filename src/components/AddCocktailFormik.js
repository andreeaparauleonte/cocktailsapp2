import React, {Component} from 'react';
import { Formik } from 'formik';
import {  
    Link
  } from 'react-router-dom';


class AddCocktailFormik  extends Component{
    constructor(props){
        super(props);
        this.state ={
            imgSrc: "" 
        }
        this.cocktailfile = React.createRef();
        this.changeFileState=this.changeFileState.bind(this);
    }

    changeFileState(){
        // Assuming only image
        var file = this.cocktailfile.current.files[0];
        console.log("file");
        console.log(file);
        var reader = new FileReader();
        var url = reader.readAsDataURL(file);
      
         reader.onloadend = function (e) {
            this.setState({
                imgSrc: [reader.result]
            })
          }.bind(this);
        console.log(url); // Would see a path?
        // TODO: concat files
      }

    render(){
        console.log(this.props);
        return (<div>
            <h1>My Form</h1>
            <Formik
              initialValues={{ name: "andreea's special", ingredient1: "votca", ingredient2 :"orange juice", quantity: 2 }}
              onSubmit={(values, actions) => {
                console.log("onsubmit");
                console.log(values);
                console.log(this);
                console.log(this.cocktailfile.current.files[0]);
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  actions.setSubmitting(false);
                }, 1000);
              }}
              render={formikProps=> (
                  <div className="categoryContainer">
                  
                      <form onSubmit={formikProps.handleSubmit}>
                          <div className="imageDiv">
                              <input type="file" name="pic" ref={this.cocktailfile} accept="image/*" onChange={this.changeFileState} />
                              <img src={this.state.imgSrc} alt="select image"/>
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
                      <Link to={this.props.backLocation}><button className="backButton" >Back</button></Link>
                  </div>
              )}
            />
          </div>)
    }
}

  export default AddCocktailFormik;