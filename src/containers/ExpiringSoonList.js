import React from 'react'
import WarrantyCard from '../components/WarrantyCard'
class ExpiringSoonList extends React.Component{

  renderWarranties = () => {
    return this.props.data.map((warranty, index) => {
      return <WarrantyCard
        index={index}
        warranty={warranty}
        days={this.props.days}
        sum={this.props.sum}
        formatDate={this.formatDate}
        remainingDays={this.props.remainingDays}
        formatDate={this.props.formatDate}
      />
    })
  }

    render(){
      return(
        <div>
          <h1>Expiring Soon</h1>
          {this.renderWarranties()}
        </div>
      )
    }
  }

  export default ExpiringSoonList;
