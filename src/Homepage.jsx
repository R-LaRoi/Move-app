import React from 'react'
import { Link } from 'react-router-dom'
import "./homepage.css"
import mbvid from './assets/mbvid.mp4'


import './App.css'


export default function Homepage() {

  return (

      <section className='hero-container'>
      <video autoPlay loop muted playsInline id="mobile-vid">
        {/* <source 
          src="
https://github.com/R-LaRoi/Move-app/assets/114012059/d13eb87f-9cb6-49ad-a563-732767ae3775"
          type="video/mp4"
        /> */}
        <source src={mbvid}  type="video/mp4"/> 
      </video>


      <div className='header'> <span style={{fontSize:"3rem"}}>what's the <div style={{fontSize:"8rem" ,}}>move</div></span>
      <div className='h-btn'>
     <Link to = "/meetrachel"> <button className='home-btn'>rachel</button></Link>
         <Link to = "/dailyroutine">  <button className='home-btn'> move</button></Link>
       
         </div></div>
      
</section>
  )
}