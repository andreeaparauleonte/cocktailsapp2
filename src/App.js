import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import './App.css';
import Category from './components/Category';
import CocktailView from './components/CocktailView';
import CocktailDetails from './components/CocktailDetails';
import ScrollToTop from './components/ScrollToTop';

class App extends Component {
  state = {
        categories:[
          {id: "alcoholic", name: "Alcoholic", filterBy : "Alcoholic", filterType : "a"},
          {id: "non-alcoholic", name: "Non Alcoholic", filterBy : "Non_Alcoholic", filterType : "a"},
          {id: "ordinary", name: "Ordinary Drink", filterBy : "Ordinary_Drink", filterType : "c"},
          {id: "cocktail-glass", name: "Cocktail glass", filterBy : "Cocktail_glass", filterType : "g"},
          {id: "champagne-flute", name: "Champagne flute", filterBy : "Champagne_flute", filterType : "g"},
        ],
        selectedCategory:null,
        selectedItem : null,
        viewCocktail : false,
        showDetails : false
  }

  clickCategory = (category) =>{
    this.setState({
      selectedCategory: category,
      selectedItem : null,
      showDetails : false,
      viewCocktail : false
    });
  }
  viewCocktailHandle = (cocktail) => {
    this.setState({
        selectedItem : cocktail,
        viewCocktail : true,
        showDetails : false
    });
  }

  cancelViewCocktail = () =>{
    this.setState({
      selectedItem : null,
      viewCocktail : false
    });
    window.scrollTo(0, 0);
  }

  resetViewsState = (categoryid) => {
    let category = this.state.categories.filter(x=>x.id === categoryid)[0];
    this.setState({
      selectedCategory: category,
      selectedItem : null,
      showDetails : false,
      viewCocktail : false
    });
  }

  render() {
    let menuItems= this.state.categories.map((category, index) => {return <td key={index}
      className={this.state.selectedCategory === category ? "active":""}>
        <Link to={"/" + category.id} onClick={() => this.clickCategory(category)}>{category.name}</Link></td>});

    return(
      <Router>
        <ScrollToTop>
    <div className="App">
      <header className="App-header">
        <h1>Cocktails</h1>
        <table cellPadding="0" cellSpacing="0">
        <tbody><tr>        
          {menuItems}
          </tr></tbody>
          </table>
      </header>
      <div className="App-search">
        <input type="text" defaultValue="Search by name" />
      </div>

      {(this.state.showDetails && this.state.selectedItem!=null) && 
        <CocktailDetails {...this.state.selectedItem} cancelDetailsCocktail={this.cancelDetailsCocktail} />
      }
      
      <Switch>      
        <Route path="/:id" render={
          (props) => {
            let category = this.state.categories.filter(x=>x.id===props.match.params.id)[0];
            return (
              <Category {...category} 
              key={category.id} 
              hide={this.state.viewCocktail} 
              viewCocktailHandle={this.viewCocktailHandle} 
              matchCategory={props.match}
              resetViewsState={this.resetViewsState}
              />
              )
          }            
        }/>      
      </Switch>
      

      {
        (this.state.viewCocktail && this.state.selectedItem!=null) &&
        <CocktailView {...this.state.selectedItem} cancelViewCocktail={this.cancelViewCocktail} backLocation={this.state.selectedCategory.id}/>
      }
      <div className="footer"></div>
    </div>
    </ScrollToTop>
    </Router>
    )
  }
}

export default App;
