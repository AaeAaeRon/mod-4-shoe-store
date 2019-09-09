import React from 'react';
import './App.css'; 
import NavBar from './components/NavBar'
import ShoeContainer from './components/ShoeContainer'
import FavShoes from './components/FavShoes'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// import {Container} from 'react-bootstrap'
// import {LogIn} from './components/LogIn'
// import {NoMatch} from './components/NoMatch'


class App extends React.Component  {
  
  constructor(){
    super()
    this.state = {
      shoes: [],
      displayShoes: [],
      everyShoes: [],
      favoriteShoes: [],
      delShoes: []

    }
  }
  componentDidMount() {
    // shoeUrl = "http://localhost:3000/shoes" 
    fetch("http://localhost:3000/shoes")
    .then(res => res.json())
    .then(shoes => {
      this.setState({
        shoes: shoes,
        displayShoes: shoes
      })
    })
  }

  addFavoriteShoes = all => {
    this.setState({
      everyShoes: [...this.state.everyShoes,all], 
      favoriteShoes: [...this.state.everyShoes,all]
    })
  }

  dltFavoriteShoes = all => {
    // let dlt = this.state.everyShoes.filter(s => s !== all)
    this.setState({
      everyShoes: this.state.everyShoes.filter(s => s !== all)
    })
  }
  
  render() {
    return (
      <div>
        <Router>
          <Switch>
            {/* <Route exact path='/' component ={Home} /> */}
            {/* <Route path='/login' component={LogIn} /> */}
            {/* <Route component ={NoMatch}/> */}
          </Switch>

      </Router>
 
        <header className="App-header">
          <NavBar/>
        </header>

        <ShoeContainer displayShoes={this.state.displayShoes} addFavoriteShoes={this.addFavoriteShoes}/>
        <FavShoes favoriteShoes={this.state.favoriteShoes} dltFavoriteShoes={this.dltFavoriteShoes}/>

        
      </div>
    );
  }
  
}

export default App;
