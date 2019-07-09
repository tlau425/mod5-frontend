import React from 'react';
import './App.css';
import WarrantyForm from './containers/WarrantyForm'

class Create extends React.Component{

  handleSubmit = (newWarranty) => {
  fetch(`http://localhost:3000/api/v1/warranties`,{
    method:'POST',
    headers:{
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({warranty: newWarranty})
  })
}
  render(){
    return(
      <div>
       <h1>Create Page</h1>
       <WarrantyForm handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}
export default Create;
