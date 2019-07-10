import React from 'react'
import './style.css'

class Popup extends React.Component {
  render() {
    return(
      <div className='popup'>
        <div className='popup\_inner'>
          <p>{this.props.text}</p>
          <button onClick={this.props.closePopup}>close me</button>
        </div>
      </div>
    )
  }
}

export default Popup;
