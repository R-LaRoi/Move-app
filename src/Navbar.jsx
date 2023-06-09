import { NavLink } from "react-router-dom";
import React from "react";
import "./nav.css"


export default function Navbar() {

  return(

    <nav className="nav-container">
      <ul className="icons">
        <li>
<NavLink to="/">H</NavLink>
        </li>
        <li>
  <NavLink to="/meetrachel">R</NavLink>
        </li>
        <li>
  <NavLink to="/dailyroutine">Log</NavLink>
        </li>
      </ul>
   

          
    </nav>
     
  )
}