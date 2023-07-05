import { NavLink } from "react-router-dom";
import React from "react";
import "./nav.css"


export default function Navbar() {

  return(

    <nav className="nav-container">
      <ul className="nav-icons">

     <li>

  <NavLink to="/meetrachel">
        <i className="fa-solid fa-star "></i>
        </NavLink>
  
   </li>


      <li>   <NavLink to="/">
  <i className="fa-solid fa-grip-lines"></i>
      </NavLink>
    
              </li>
        <li>
   
  <NavLink to="/dailyroutine"><i className="fa-solid fa-calendar"></i>
  </NavLink>
    </li>


  
      </ul>
   

          
    </nav>
     
  )
}