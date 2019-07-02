import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Expired from './Expired';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WarrantiesContainer from './containers/WarrantiesContainer'

class App extends React.Component {
  render(){
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component = {Home} />
            <Route path="/about" component = {About} />
            <Route path="/expired" component = {Expired} />
          </Switch>
          <WarrantiesContainer />
        </div>
      </Router>
    );
  }
}

const Home = () => (
  <div>
  <h1>Home Page</h1>
  </div>
)

export default App;
