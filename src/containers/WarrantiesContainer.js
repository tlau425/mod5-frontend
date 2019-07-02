import React from 'react'
import WarrantiesList from './WarrantiesList'
import moment from 'moment';
class WarrantiesContainer extends React.Component{
  state = {
    warranties: []
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/api/v1/warranties')
    .then(res => res.json())
    .then(data => {
      this.setState({warranties: data})
    })
  }

  saveExpiration = (inst) => {
    fetch(`http://localhost:3000/api/v1/expirations`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      Accept: 'application/json'
    },
      body: JSON.stringify({warranty: inst})
    })
  }

  render(){
    console.log(this.state)
    return (
      <div className="grid-container">
      <WarrantiesList data = {this.state.warranties} days = {this.calculateDaysLeft}/>
      </div>
    )
  }
}

export default WarrantiesContainer;
