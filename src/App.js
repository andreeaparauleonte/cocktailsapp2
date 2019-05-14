import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import './App.css';
import Category from './components/Category';
import ScrollToTop from './components/ScrollToTop';

const history = createHistory()

class App extends Component {
  state = {
        categories:[
          {id: "alcoholic", name: "Alcoholic", filterBy : "Alcoholic", filterType : "a"},
          {id: "non-alcoholic", name: "Non Alcoholic", filterBy : "Non_Alcoholic", filterType : "a"},
          {id: "ordinary", name: "Ordinary Drink", filterBy : "Ordinary_Drink", filterType : "c"},
          {id: "cocktail-glass", name: "Cocktail glass", filterBy : "Cocktail_glass", filterType : "g"},
          {id: "champagne-flute", name: "Champagne flute", filterBy : "Champagne_flute", filterType : "g"},
        ],
        selectedCategory:null
  }

  clickCategory = (category) =>{
    this.setState({
      selectedCategory: category
    });
  }

  render() {
    let menuItems= this.state.categories.map((category, index) => {return <td key={index}
          className={this.state.selectedCategory === category ? "active":""}>
          <Link to={"/" + category.id} onClick={() => this.clickCategory(category)}>{category.name}</Link></td>});

    return(
      <Router history={history}>
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

            <Switch>        
              <Route path="/:id" render={(props) => {
                  let category = this.state.categories.filter(x=>x.id===props.match.params.id)[0];
                  return (<Category {...category} key={category.id} matchCategory={props.match} history={props.history}/>)
                }            
              }/>            
            </Switch>
            
            <div className="footer"></div>
          </div>
          </ScrollToTop>
    </Router>
    )
  }
}

export default App;
