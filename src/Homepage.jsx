import React from 'react'
import { Link } from 'react-router-dom'


import './App.css'


export default function Homepage() {

  return (

      <section className='hero-container'>
      <video autoPlay loop muted id="video">
        <source
          src="

https://github.com/R-LaRoi/Flavor-App/assets/114012059/728b571a-fb5e-464e-911e-5e2e1955a692"
          type="video/mp4"
        />
      </video>
      <div className='header--vid'> <span>consistency is key.</span>
     <Link to = "/meetrachel"> <button>meet rachel</button></Link>
         <Link to = "/dailyroutine">  <button>what's the move</button></Link></div>
      
</section>
  )
}