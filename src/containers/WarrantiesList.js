import React from 'react'
import WarrantyCard from '../components/WarrantyCard'
import moment from 'moment';
class WarrantiesList extends React.Component{

  renderWarranties = () => {
    return this.props.data.map((warranty, index) => {
      return <WarrantyCard
        index = {index}
        warranty = {warranty}
        days = {this.props.days}
        sum = {this.props.sum}
        formatDate = {this.formatDate}
        remainingDays = {this.props.remainingDays}
        formatDate = {this.props.formatDate}
        handleClick = {this.props.handleClick}
      />
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
