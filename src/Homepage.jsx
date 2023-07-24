import React from 'react'
import { Link } from 'react-router-dom'
import "./homepage.css"
import mbvid from './assets/mbvid.mp4'
import MeetRachel from './MeetRachel'
import Navbar from './Navbar'



import './App.css'


export default function Homepage() {

  return (
<>
<div className='nav-'>
      <Navbar />
      </div>
  <section className='hero-container'>

      <video autoPlay loop muted playsInline id="mobile-vid">
        <source src={mbvid}  type="video/mp4"/> 
      </video>
      <div className='header'> <span style={{fontSize:"2.2rem" , paddingLeft:'20px'}}>what's the <div style={{fontSize:"7.3rem" ,}}>move</div></span>
      <div className='hp-subtext'> Make the days count for you. </div>
          
      </div>
</section>

<section>
  <MeetRachel />
</section>

</>

  )
}