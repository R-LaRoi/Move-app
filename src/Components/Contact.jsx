import React from 'react'
import Navbar from './Navbar'
import './stylesheets/contact.css'
import img4 from './assets/img4.png'
import three from './assets/three.mp4'
import Footer from './Footer'


export default function Contact() {
return (
<>


<Navbar />

<section className='contact-container'>
<section className='meet-container'>
<div className='sec-contact'>
<img src={img4}  className="meet-pic"alt="woman excercising outdoors" />

  <div className='meet-text'>
    <h1>let's move</h1>
      <p>Let's stay fit-for-life! I am committed to 
  empower through movement and here to encourage others to build on their strengths and maintain good habits. Consistency is key. </p>
     <div>Personal training sessions available by appointment. <div>
      <i className="fa-solid fa-calendar"></i>
      </div> </div> 
      Virtual Group Sessions <br></br>
       <div>6:30AM</div>
            
          Monday / Wednesday / Friday 
         <p>email for zoom link</p>
            <div>
              <i className="fa-solid fa-square-envelope"></i></div>
  
          
            </div>

          
</div>
      <video autoPlay loop muted playsInline id='three-vid' >
            <source src={three}  type="video/mp4"  /> 
          </video>

  <div className='contact-icons'>
      <a href="#">
      <i className="fa-brands fa-tiktok"></i></a>
      <p>Consistency is key! Join us on tiktok and discover fitness tips to boost your workout.</p>

      <a href= "https://open.spotify.com/playlist/02LtXdK3vRDKtKSiQxuTIq?si=0ce81940fb9d48a8"> 
      <i className="fa-brands fa-spotify" id="spotify">
      </i> </a>
        <p>Stay motivated to move with our Amapiano Jump Rope Playlist! </p>

      <a href=""><i className="fa-regular fa-comments"></i></a>
      <p>Let's connect! I am always happy to hear from you. </p>
      </div>

</section>
   
<div>
 
</div>
  <div>
      <Footer /></div> 
</section>

</>
)}