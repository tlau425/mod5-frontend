import React from 'react'
import WarrantyCard from '../components/WarrantyCard'
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
    let styles = {
      "marginRight": "0%"
    };
    return(
      <div>
        <h1 style={styles}>Expired Warranty List</h1>
        <div className="expired-card-container">
          {this.renderWarranties()}
          </div>
      </div>
    )
  }
}

export default ExpiredWarrantiesList;
