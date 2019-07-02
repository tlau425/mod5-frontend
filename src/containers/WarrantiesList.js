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
    var date = new Date(date)
    date = moment(date).format('MM-DD-YYYY')
    return (date)
  }

  remainingDays(expirationDate){
    var a = moment(expirationDate);
    var b = moment();
    // a.diff(b, 'years');
    return a.diff(b, 'days', true);
    // moment(expirationDate, "YYYY-MM-DD").fromNow()
  }
    // var start = moment(purchaseDate, "YYYY-MM-DD").startOf('day');
    // var end = moment(expirationDate, "YYYY-MM-DD").startOf('day');
    // return moment.duration(start.diff(end)).asDays();

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
