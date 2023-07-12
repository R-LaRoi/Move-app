import { NavLink } from "react-router-dom";
import React from "react";
import "./nav.css"
import GetDay from "./Date";


export default function Navbar() {

  return(

    <nav className="nav-container">
      <ul className="nav-icons">

     <li>

  <NavLink to="/meetrachel">
        <i className="fa-solid fa-star "></i>
        </NavLink>
  
   </li>


      <li> 
          <NavLink to="/dailyroutine">
    <GetDay/>
  </NavLink>
       
    
              </li>

        <li>
      <NavLink to="/">
  <i className="fa-solid fa-house"></i>
      </NavLink>

    </li>


  
      </ul>
   

          
    </nav>
     
  )
}