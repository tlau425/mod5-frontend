import React from 'react'
import WarrantyCard from '../components/WarrantyCard'
import moment from 'moment';
class ExpiredWarrantiesList extends React.Component{
  state = {
    expiredWarranties: []
  }

  formatDate(date) {
    var newDate = new Date(date)
    newDate = moment(newDate).format('DD-MM-YYYY')
    return (newDate)
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/api/v1/warranties')
    .then(res => res.json())
    .then(data => {
      const newList = data.filter(eachWarranty => {
        return eachWarranty.expiration
      })
      this.setState({
        expiredWarranties: newList
      })
      console.log("i am here", newList)
    })
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
