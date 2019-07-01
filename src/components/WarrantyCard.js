import React from 'react'

const WarrantyCard = props => {
  const {warranty, index, sum} = props

  return(
    <div className = "column">
      <div className = "warrantyCard">
        <div className = "header">
          {index+1}. {warranty.name}
          <br></br>
          {warranty.notes}
          <br></br>
          {warranty.wrnty_days} Days of warranty
          <br></br>
          Purchased on: {warranty.buy_date}
          <br></br>
          Expires on: {sum(warranty.buy_date, warranty.wrnty_days)}
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  )
}

export default WarrantyCard;
