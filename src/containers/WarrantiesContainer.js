import React from 'react'
import Nav from '../Nav'
import WarrantiesList from './WarrantiesList'
import ExpiringSoonList from './ExpiringSoonList'
import ExpiredWarrantiesList from './ExpiredWarrantiesList'
import WarrantyForm from './WarrantyForm'
import Popup from '../components/Popup'
import moment from 'moment';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


class WarrantiesContainer extends React.Component{
  state = {
    warranties: [],
    expiredWarranties: [],
    term: "",
    showWarranty: {},
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
    newDate = moment(newDate).format('MMMM-DD-YYYY')
    return (newDate)
  }

  handleSubmit = (newWarranty) => {
    fetch(`http://localhost:3000/api/v1/warranties`,{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({warranty: newWarranty})
    })
  }

  handleShowPageClick = (e) => {
    fetch(`http://localhost:3000/api/v1/warranties/${e.id}`)
    .then(res => res.json())
    .then(data => this.setState({
      showWarranty: (data),
      showPage: !this.state.showPage
    }
    ,() => console.log('click state', e)
    ))
  }

  render(){
    const filteredSearch = this.state.warranties.filter(eachWarranty =>
      eachWarranty.name.toLowerCase().includes(this.state.term.toLowerCase()))
    console.log("initial state:", this.state)
    return (
      <Router>
        <div className="App">
          <Nav/>
          {this.state.showPage ?
            <Popup
            text='Click "Close Button" to hide popup'
            closePopup={this.handleShowPageClick.bind(this)}
            />
            : null
          }
          <Switch>

            <div className="grid-container">
              <Route exact path="/" render={()=> <>
                <WarrantiesList
                  filteredSearch={filteredSearch}
                  handleSearchChange={this.handleSearchChange}
                  data = {this.state.warranties}
                  days = {this.calculateDaysLeft}
                  sum = {this.sum}
                  remainingDays = {this.remainingDays}
                  formatDate = {this.formatDate}
                  handleShowPageClick = {this.handleShowPageClick}
                />
                <ExpiringSoonList
                  data = {this.state.warranties}
                  days = {this.calculateDaysLeft}
                  sum = {this.sum}
                  remainingDays = {this.remainingDays}
                  formatDate = {this.formatDate}
                  handleShowPageClick = {this.handleShowPageClick}
                />
              </>} />

              <Route path="/create" render={() =>
                <WarrantyForm
                  handleSubmit={this.handleSubmit}
                />}
              />

              <Route path="/expired" render={() =>
                <ExpiredWarrantiesList
                  filteredSearch={filteredSearch}
                  handleSearchChange={this.handleSearchChange}
                  data = {this.state.warranties}
                  days = {this.calculateDaysLeft}
                  sum = {this.sum}
                  remainingDays = {this.remainingDays}
                  formatDate = {this.formatDate}
                  handleShowPageClick = {this.handleShowPageClick}
                />}
              />
            </div>
          </Switch>
        </div>
      </Router>
    )
  }
}


export default WarrantiesContainer;
