import React from 'react'
import WarrantyCard from '../components/WarrantyCard'
class WarrantiesList extends React.Component{

  renderWarranties = () => {
    return this.props.filteredSearch.map((warranty, index) => {
      const dateDaySum = this.props.sum(warranty.buy_date, warranty.wrnty_days)
      const daysLeft = Math.floor(this.props.remainingDays(dateDaySum))+1
      return <WarrantyCard
        index = {index}
        warranty = {warranty}
        days = {this.props.days}
        sum = {this.props.sum}
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
        <input placeholder="Search by Name" value={this.props.term} onChange={this.props.handleSearchChange}/>
        <br></br>
        <br></br>
        {this.renderWarranties()}
      </div>
    )
  }
}

export default WarrantiesList;
