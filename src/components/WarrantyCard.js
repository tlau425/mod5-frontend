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

    redDaysRemaining = () => {
      const {warranty, index, sum, formatDate, remainingDays, handleShowPageClick} = this.props
      const dateDaySum = sum(warranty.buy_date, warranty.wrnty_days)
      const remaining = Math.floor(remainingDays(dateDaySum))+1
      if (remaining <= 7){
      return <p style={{color:'red'}}> Remaining Days: {remaining} </p>
    }
      else {
          return <p> Remaining Days: {remaining} </p>
    }
    }

  render(){
    const {warranty, index, sum, formatDate, remainingDays, handleShowPageClick} = this.props
    const dateDaySum = sum(warranty.buy_date, warranty.wrnty_days)
    const remaining = Math.floor(remainingDays(dateDaySum))+1
    return(
      <div className = "warrantyCard" onClick={() => handleShowPageClick(warranty)}>
          {index+1}. {warranty.name}
          <br></br>

          Purchased on: {formatDate(warranty.buy_date)}
          <br></br>
          Expiration Date: {formatDate(dateDaySum)}
          <br></br>
          {this.redDaysRemaining()}
          <br></br>
          <br></br>
      </div>
    )
  }
}
export default WarrantyCard;
