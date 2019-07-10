import React from 'react'
import WarrantyCard from '../components/WarrantyCard'
import moment from 'moment';
class ExpiredWarrantiesList extends React.Component{

  renderWarranties = () => {
    return this.props.data.map((warranty, index) => {
      const dateDaySum = this.props.sum(warranty.buy_date, warranty.wrnty_days)
      const daysLeft = Math.floor(this.props.remainingDays(dateDaySum))+1
      if(daysLeft < 0)
      return <WarrantyCard
        index={index}
        warranty={warranty}
        days={this.props.days}
        sum={this.props.sum}
        remainingDays={this.props.remainingDays}
        formatDate={this.props.formatDate}
        handleShowPageClick={this.props.handleShowPageClick}
      />
    })
  }
  render(){
    return(
      <div>
        <h1>Expired Warranty List</h1>
          {this.renderWarranties()}
      </div>
    )
  }
}

export default ExpiredWarrantiesList;
