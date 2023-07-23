import { NavLink } from "react-router-dom";
import React from "react";
import "./nav.css"
import GetDay from "./Date";


export default function Navbar() {

  return(

    <nav className="nav-container">
      <ul className="nav-icons">
     <li>
      <NavLink to="/">
       <i className="fa-solid fa-house"></i>
      </NavLink>
     <NavLink to="/contact">
    <i className="fa-solid fa-link"></i>
        </NavLink>

   </li>

      <li> 
          <NavLink to="/dailyroutine">
<i className="fa-solid fa-stopwatch"></i>
  </NavLink>
       
              </li>



  
      </ul>
   

          
    </nav>
     
  )
}