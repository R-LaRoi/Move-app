import { NavLink } from "react-router-dom";
import React from "react";
import "./nav.css"


export default function Navbar() {

  return(

    <nav className="nav-container">
      <ul className="icons">
        <li>
<NavLink to="/"><i className="fa-solid fa-house"></i></NavLink>
        </li>
        <li>
  <NavLink to="/meetrachel"><i className="fa-solid fa-user"></i> <NavLink to="/dailyroutine"><i className="fa-solid fa-list"></i></NavLink></NavLink>

        </li>
      </ul>
   

          
    </nav>
     
  )
}