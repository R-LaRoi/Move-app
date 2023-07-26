import React from 'react'
import "./stylesheets/meetRachel.css"
import img5 from './assets/img5.png'
import jump from './assets/jumpgif.gif'
import './stylesheets/cards.css'
import { Link } from "react-router-dom";
export default function Cards() {

  
return (

<section className='links' style={{backgroundColor:"whitesmoke"}}>

<Link to="/dailyroutine" className='one'>
    <div className='img-text'>
    celebrate your small wins</div>
      <img src={img5}  className="grid-img"alt="woman excercising outdoors"/>
 </Link>

<Link to='/contact' className='one'>
  <div className='img-text'> let's move </div> 

  <img src={jump}  className="grid-img"alt="woman excercising outdoors"/>
 </Link>

</section>


)}



