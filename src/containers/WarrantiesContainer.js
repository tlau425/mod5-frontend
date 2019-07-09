import React from 'react'
import WarrantiesList from './WarrantiesList'
import ExpiringSoonList from './ExpiringSoonList'
import ExpiredWarrantiesList from './ExpiredWarrantiesList'
import moment from 'moment';


class WarrantiesContainer extends React.Component{
  state = {
    warranties: [],
    expiredWarranties: [],
    term: "",
    showPage: false
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/api/v1/warranties')
    .then(res => res.json())
    .then(data => {
      this.setState({warranties: data})
    })
  }

  handleSearchChange = (e) => {
    this.setState({
      term: e.target.value
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
      showPage: true
    })
  }

  render(){
    const filteredSearch = this.state.warranties.filter(eachWarranty =>
      eachWarranty.name.toLowerCase().includes(this.state.term.toLowerCase()))
    console.log("initial state:", this.state)
    return (
      <div className="grid-container">
        <WarrantiesList
          filteredSearch={filteredSearch}
          handleSearchChange={this.handleSearchChange}
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
