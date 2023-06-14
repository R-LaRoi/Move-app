import React from 'react'
import pic from "./assets/pic2.png"
import Navbar from './Navbar'
import "./meetRachel.css"
import Footer from './Footer'

export default function MeetRachel() {
return (

<section className='meet-container'>
  <Navbar />


  <div className='sec-two'>
<img src={pic}  className="meet-pic"alt="woman excercising outdoors"
 />

  <div className='meet-text'>
    <h1>meet rachel</h1>
always on. high energy unmatched. <br></br>
            <br></br>here to motivate you through every minute of your fitness
            journey. focusing on body weight movements to help you strengthen,
            condition and improve balance. rachel is ready to partner with you
            and push beyond your expectations. wherever you are. whenever you're
            ready. <br></br>let's move!{" "}</div>

          
</div>

   
 <div className='spotify'>

<iframe src="https://open.spotify.com/embed/playlist/02LtXdK3vRDKtKSiQxuTIq?utm_source=generator" width="100%" height="375" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

</div> 

            <Footer />
</section>

)}