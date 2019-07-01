import React from 'react'
import WarrantyCard from '../components/WarrantyCard'

class WarrantiesList extends React.Component{

  sum(mydate, days) {
    var date = new Date(mydate);
    date.setDate(date.getDate() + (days + 1));
    var options = { day: '2-digit', month: '2-digit', year: 'numeric'};
    return (date.toLocaleDateString('en-US', options))
  }
  renderWarranties = () => {
    return this.props.data.map((warranty, index) => {
      return <WarrantyCard index={index} warranty={warranty} days={this.props.days} sum={this.sum}/>
    })
  }

  render(){
    return(
      <div>
        <h1>Warranty List</h1>
        {this.renderWarranties()}
      </div>
    )
  }
}

export default WarrantiesList;
