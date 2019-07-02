import React from 'react'
import WarrantyCard from '../components/WarrantyCard'
import moment from 'moment';
class WarrantiesList extends React.Component{

  sum(purchaseDate, days) {
    var date = new Date(purchaseDate)
    date = moment(date).add(days, 'day').format('MM-DD-YYYY')
    return (date)
  }

  formatDate(date) {
    var newDate = new Date(date)
    newDate = moment(newDate).format('MM-DD-YYYY')
    return (newDate)
  }

  remainingDays(expirationDate){
    var a = moment(expirationDate);
    var b = moment();
    // a.diff(b, 'years');
    return a.diff(b, 'days', true);
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
