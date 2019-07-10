import React from 'react'
import './style.css'

class Popup extends React.Component {
  render() {
    const {showWarranty, formatDate, sum, remainingDays} = this.props
    const dateDaySum = sum(showWarranty.buy_date, showWarranty.wrnty_days)
    return(
      <div className='popup'>
        <div className='popup\_inner'>
          <h2>{showWarranty.name}</h2>
            <br></br>
          <p>
            Personal Notes: {showWarranty.notes}
            <br></br>
            Purchased on: {formatDate(showWarranty.buy_date)}
            <br></br>
            Warrantied for {showWarranty.wrnty_days} days
            <br></br>
            Expiration Date: {formatDate(showWarranty.expiration)}
            <br></br>
          <h2>Days Remaining: {Math.floor(remainingDays(dateDaySum))+1} </h2>
          </p>


          <button onClick={this.props.closePopup}>close me</button>
        </div>
      </div>
    )
  }
}

export default Popup;
