import React from 'react'
class WarrantyCard extends React.Component{

    componentDidMount = () => {
      fetch(`http://localhost:3000/api/v1/warranties/${this.props.warranty.id}`,{
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        Accept: 'application/json'
      },
        body: JSON.stringify({expiration: this.props.formatDate(this.props.sum(this.props.warranty.buy_date, this.props.warranty.wrnty_days))})
      })
    }

  render(){
    const {warranty, index, sum, formatDate, remainingDays, handleShowPageClick} = this.props
    const dateDaySum = sum(warranty.buy_date, warranty.wrnty_days)
    return(
      <div className = "warrantyCard" onClick={() => handleShowPageClick(warranty)}>
          {index+1}. {warranty.name}
          <br></br>
          {warranty.notes}
          <br></br>
          {warranty.wrnty_days} Days of Warranty
          <br></br>
          Purchased on: {formatDate(warranty.buy_date)}
          <br></br>
          Expiration Date: {formatDate(dateDaySum)}
          <br></br>

          Remaining Days: {Math.floor(remainingDays(dateDaySum))+1}
          <br></br>
          <br></br>
      </div>
    )
  }
}
export default WarrantyCard;
