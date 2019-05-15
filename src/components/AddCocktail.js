import React,{Component} from 'react';

class AddCocktail  extends Component{
  constructor(props){
    super(props);
    this.state = {
        image: "",
        name: "",
        formErrors : {image: "", name :"", ingredient1:"", ingredient2:"", quantity:""},
        ingredient1 : "",
        ingredient2: "",
        quantity: "",
        formValid: false
    }
  }

  handleChangeData (e){
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
        [name] : value},
            () => this.validateField(name,value)
    );
  }

  render(){
    return (
      <div className="categoryContainer">
          <form>
          <div className="imageDiv">
            <input type="file" name="pic" accept="image/*" />
          </div>
          <div className="detailsDiv">
            <div className="rowForm">
              <label>Name</label>
              <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChangeData(e)}/>
            </div>
            <div className="rowForm">
              <label>Ingredient 1</label>
              <input type="text" name="ingredient1" value={this.state.ingredient1} onChange={(e) => this.handleChangeData(e)}/>
            </div>
            <div className="rowForm">
              <label>Ingredient 2</label>
              <input type="text" name="ingredient2" value={this.state.ingredient2} onChange={(e) => this.handleChangeData(e)}/>
            </div>
            <div className="rowForm">
              <label>Quantity</label>
              <input type="text" name="quantity" value={this.state.quantity} onChange={(e) => this.handleChangeData(e)}/>
            </div>
            <div className="rowForm">
              <button type="submit">Submit</button>
            </div>
            </div>
        </form>
        <button className="backButton" onClick={props.history.goBack}>Back</button>
        </div>
        
    )
  }
}

export default AddCocktail;