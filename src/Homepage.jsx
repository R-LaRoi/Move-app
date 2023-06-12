import React from 'react'
import { Link } from 'react-router-dom'
import "./homepage.css"


import './App.css'


export default function Homepage() {

  return (

      <section className='hero-container'>
      <video autoPlay loop muted id="mobile-vid">
        <source 
          src="
https://github.com/R-LaRoi/Move-app/assets/114012059/a6428fa5-0f4d-41f0-8955-be3153861000"
          type="video/mp4"
        />
      </video>

<div className='move-video'>
       <video autoPlay loop muted id="dsk-vid">
        <source
          src="
https://user-images.githubusercontent.com/114012059/218713471-633594a8-adc7-4600-90c1-95f4a1347ff6.mp4"
          type="video/mp4"
        />
      </video>
</div>
      <div className='header'> <span>consistency is key.</span>
      <div className='h-btn'>
     <Link to = "/meetrachel"> <button className='home-btn'>meet rachel</button></Link>
         <Link to = "/dailyroutine">  <button className='home-btn'>what's the move</button></Link>
         </div></div>
      
</section>
  )
}