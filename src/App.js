import React from 'react';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import Expired from './Expired';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  render(){
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component = {Home} />
            <Route path="/expired" component = {Expired} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
