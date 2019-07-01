import React from 'react';
import logo from './logo.svg';
import './App.css';
import WarrantiesContainer from './containers/WarrantiesContainer'

class App extends React.Component {
  render(){
    return (
      <div className="App">
      <WarrantiesContainer/>
      </div>
    );
  }
}

export default App;
