import React from 'react'
import WarrantyCard from '../components/WarrantyCard'
import moment from 'moment';
class ExpiredWarrantiesList extends React.Component{

  formatDate(date) {
    var newDate = new Date(date)
    newDate = moment(newDate).format('MM-DD-YYYY')
    return (newDate)
  }

  renderWarranties = () => {
    return this.props.data.map((warranty, index) => {
      return <WarrantyCard
        index={index}
        warranty={warranty}
        days={this.props.days}
        sum={this.props.sum}
        formatDate={this.formatDate}
        remainingDays={this.props.remainingDays}
      />
    })
  }

  render(){
    return(
      <div>
        <h1>Expired Warranty List</h1>
      </div>
    )
  }
}

export default ExpiredWarrantiesList;
