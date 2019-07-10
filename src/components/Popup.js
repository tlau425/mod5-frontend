import React from 'react'
import './style.css'

class Popup extends React.Component {

  renderPhotos = () => {
    return this.props.pictures.map(photo => {
      return photo.picture
    })
  }

  render() {
    const {showWarranty, formatDate, sum, remainingDays} = this.props
    const dateDaySum = sum(showWarranty.buy_date, showWarranty.wrnty_days)
    const instance = showWarranty
    return(
      <div className='popup'>
        <div className='popup\_inner'>
          <h2>{showWarranty.name}</h2>
            <img style={{width: 250, height: 150}} src={this.renderPhotos()} alt="new"/>
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
          <button className="closeButton" onClick={this.props.closePopup}>close me</button>
          <button className="deleteButton" name="Delete" onClick={this.props.handleDeleteButton}> Delete Warranty </button>
        </div>
      </div>
    )
  }
}

export default Popup;
