import React from 'react'
import WarrantyCard from '../components/WarrantyCard'
import moment from 'moment';
class WarrantiesList extends React.Component{

  sum(purchaseDate, days) {
    var date = new Date(purchaseDate)
    date = moment(date).add(days + 1, 'day').format('MM-DD-YYYY')
    return (date)
  }

  formatDate(date) {
    var date = new Date(date)
    date = moment(date).format('MM-DD-YYYY')
    return (date)
  }

  remainingDays(purchaseDate, expirationDate){
  var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
  var firstDate = new Date(purchaseDate)
  var secondDate = new Date(expirationDate)
  var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)))
  return (expirationDate)
  }

  renderWarranties = () => {
    return this.props.data.map((warranty, index) => {
      return <WarrantyCard
        index={index}
        warranty={warranty}
        days={this.props.days}
        sum={this.sum}
        formatDate={this.formatDate}
        remainingDays={this.remainingDays}
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
