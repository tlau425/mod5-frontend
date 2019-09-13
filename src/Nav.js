import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'
import moment from 'moment';

function Nav(){
  const navStyle = {
    color: 'white'
  }
  let dateStyles = {
    color: 'black',
    "margin-right": "10%",
    "white-space": "nowrap"
  };

  return(
    <nav>
      <h3>Return Book</h3>
      <ul className="nav-links">
         <Link style={navStyle} to="/">
          <li className="nav-text">Home</li>
         </Link>
         <Link style={navStyle} to="/expired">
          <li className="nav-text">Expired</li>
        </Link>
         <Link style={navStyle} to="/create">
          <li className="nav-text">Create</li>
        </Link>
      </ul>
      <span style={dateStyles}> Today's Date: July 11, 2019 </span>

    </nav>
    )
}

export default Nav;
