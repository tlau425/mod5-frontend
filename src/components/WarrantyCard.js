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
    console.log(this.props.warranty.expiration)
    const {warranty, index, sum, formatDate, remainingDays, handleClick} = this.props
    const dateDaySum = sum(warranty.buy_date, warranty.wrnty_days)
  return(
    <div className = "column">
      <div className = "warrantyCard" onClick={() => handleClick(warranty)}>
          {index+1}. {warranty.name}
          <br></br>
          {warranty.notes}
          <br></br>
          {warranty.wrnty_days} Days of Warranty
          <br></br>
          Purchased on: {formatDate(warranty.buy_date)}
          <br></br>
          Expires on: {formatDate(dateDaySum)}
          <br></br>

          Remaining Days: {Math.floor(remainingDays(dateDaySum))+1}
          <br></br>
          <br></br>
      </div>
    </div>
  )
  }
}
export default WarrantyCard;
