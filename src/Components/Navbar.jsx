
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './stylesheets/nav.css'


export default function Navbar () {
  const [showNavbar, setShowNavbar] = useState(false)

  function handleShowNavbar () {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
  
        <div className="menu-icon" id="bars" onClick={handleShowNavbar}>
<i className="fa-solid fa-location-arrow ">
  
</i>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/dailyroutine">Today
              </NavLink>
            </li>
      
            <li>
               <NavLink to="/"> <i className="fa-solid fa-star"></i></NavLink>
             
            </li>

            <li>
              <NavLink to="/contact"> 
              Connect
              </NavLink>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  )
}





























// import { NavLink } from "react-router-dom";
// import React from "react";
// import "./nav.css"
// import GetDay from "./Date";


// export default function Navbar() {

//   return(

//     <nav className="nav-container">
//       <ul className="nav-icons">
//      <li>
//       <NavLink to="/">
//        <i className="fa-solid fa-house"></i>
//       </NavLink>
//      <NavLink to="/contact">
//     <i className="fa-solid fa-link"></i>
//         </NavLink>

//    </li>

//       <li> 
//           <NavLink to="/dailyroutine">
// <i className="fa-solid fa-stopwatch"></i>
//   </NavLink>
       
//               </li>



  
//       </ul>
   

          
//     </nav>
     
//   )
// }