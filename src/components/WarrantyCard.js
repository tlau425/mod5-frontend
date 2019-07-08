import React from 'react'

const WarrantyCard = props => {
  const {warranty, index, sum, formatDate, remainingDays, handleClick} = props
  var dateDaySum = sum(warranty.buy_date, warranty.wrnty_days)

  return(
    <div className = "column">
      <div className = "warrantyCard" onClick={() => handleClick(warranty)}>
          {index+1}. {warranty.name}
          <br></br>
          {warranty.notes}
          <br></br>
          {warranty.wrnty_days} Days of warranty
          <br></br>
          Purchased on: {formatDate(warranty.buy_date)}
          <br></br>
          Expires on: {sum(warranty.buy_date, warranty.wrnty_days)}
          <br></br>

          Remaining Days: {Math.floor(remainingDays(dateDaySum))+1}
          <br></br>
          <br></br>
      </div>
    </div>
  )
}

export default WarrantyCard;
