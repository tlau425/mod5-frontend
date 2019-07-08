import React from 'react'
import WarrantiesList from './WarrantiesList'
import ExpiringSoonList from './ExpiringSoonList'
import ExpiredWarrantiesList from './ExpiredWarrantiesList'
import moment from 'moment';

class WarrantiesContainer extends React.Component{
  state = {
    warranties: [],
    expiredWarranties: []
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/api/v1/warranties')
    .then(res => res.json())
    .then(data => {
      this.setState({warranties: data})
    })
  }

  sum(purchaseDate, days) {
    var date = new Date(purchaseDate)
    date = moment(date).add(days, 'day').format('MM-DD-YYYY')
    return (date)
  }

  remainingDays(expirationDate){
    var a = moment(expirationDate);
    var b = moment();
    // a.diff(b, 'years');
    return a.diff(b, 'days', true);
  }

  formatDate(date) {
    var newDate = new Date(date)
    newDate = moment(newDate).format('DD-MM-YYYY')
    return (newDate)
  }

  handleClick = (warranty) => {
    this.setState({
      expiredWarranties: warranty
    })
    console.log(this.state.expiredWarranties)
  }

  render(){
    console.log("initial state:", this.state)
    return (
      <div className="grid-container">
        <WarrantiesList
          data = {this.state.warranties}
          days = {this.calculateDaysLeft}
          sum = {this.sum}
          remainingDays = {this.remainingDays}
          formatDate = {this.formatDate}
          handleClick = {this.handleClick}
        />

        <ExpiringSoonList
        data = {this.state.warranties}
        days = {this.calculateDaysLeft}
        sum = {this.sum}
        remainingDays = {this.remainingDays}
        formatDate = {this.formatDate}
        handleClick = {this.handleClick}
        />
      </div>
    )
  }
}

export default WarrantiesContainer;
