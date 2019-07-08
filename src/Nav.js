import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'

function Nav(){
  const navStyle = {
    color: 'white'
  }

  return(
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
         <Link style={navStyle} to="/">
          <li className="nav-text">Home</li>
         </Link>
         <Link style={navStyle} to="/expired">
          <li className="nav-text">Expired</li>
        </Link>
      </ul>
    </nav>
    )
  }

export default Nav;