import React from 'react'
import pic from "./assets/pic2.png"
import Cards from './Cards'
import "./stylesheets/meetRachel.css"
import Footer from './Footer'

export default function MeetRachel() {
return (

<section className='meet-container'>

<div className='sec-two'>
<img src={pic} className="meet-pic"alt="woman excercising outdoors"/>

  <div className='meet-text'>
            <h1>meet rachel</h1>
            always on. high energy unmatched. <br></br>
            <br></br>here to motivate you through every minute of your fitness
            journey. focusing on body weight movements to help you strengthen,
            condition and improve balance. rachel is ready to partner with you
            and push beyond your expectations. wherever you are. whenever you're
            ready. <br></br>let's move!{" "}
             <a href="https://www.acefitness.org/resources/everyone/blog/" target="_blank" >   <p className='ace'>  American Council on Excercise Personal Trainer </p></a>  
    </div>

          
</div>
 <Cards />


    <div>
      <Footer /></div> 
</section>

)}