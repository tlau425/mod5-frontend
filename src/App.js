import React from 'react';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import Expired from './Expired';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  state = {
    warranties: [],
    expiredWarranties: [],
    term: ""
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/api/v1/warranties')
    .then(res => res.json())
    .then(data => {
      this.setState({warranties: data})
    })
  }

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
