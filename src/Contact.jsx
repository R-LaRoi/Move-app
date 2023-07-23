import React from 'react'
import Navbar from './Navbar'
import './contact.css'
import img4 from './assets/img4.png'
import three from './assets/three.mp4'
import Footer from './Footer'


export default function Contact() {
return (

<section className='contact-container'>
<Navbar />

<section className='meet-container'>
  <div className='sec-contact'>
<img src={img4}  className="meet-pic"alt="woman excercising outdoors"
 />

  <div className='meet-text'>
    <h1>let's move</h1>
    <p>Let's stay fit-for-life! I am committed to 
empower through movement and here to encourage others to build on their strengths and maintain good habits. Consistency is key. </p>
Virtual Group Sessions <br></br>
 <div>   6:30AM</div>
            
          Monday / Wednesday / Friday 
       
            <p>email for zoom link</p>
            <div><i className="fa-solid fa-square-envelope"></i></div>
            </div>

          
</div>
</section>
     <video autoPlay loop muted playsInline id='three-vid' >
        <source src={three}  type="video/mp4"  /> 
      </video>
<div>
<div className='contact-text'> </div>
<div className='contact-header'> 

 <i className="fa-brands fa-tiktok"></i>

 <i className="fa-brands fa-spotify" id="spotify">

 </i> 
<i className="fa-regular fa-comments"></i></div>

 <div className='spotify'>

{/* <iframe src="https://open.spotify.com/embed/playlist/02LtXdK3vRDKtKSiQxuTIq?utm_source=generator" width="100%" height="375" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> */}

</div>  
</div>
</section>

)}