import React from 'react'
import pic from "./assets/pic2.png"
import Navbar from './Navbar'
import "./meetRachel.css"


export default function MeetRachel() {
return (

<section className='meet-container'>
  <Navbar />

 <video autoPlay loop muted id="move-video">
        <source
          src="
https://user-images.githubusercontent.com/114012059/191604414-888f1fcf-0e85-48fc-9b6e-75a2f95f453d.mp4"
          type="video/mp4"
        />

</video>



  <div className='sec-two'>
<img src={pic}  className="meet-pic"alt="woman excercising outdoors"
 />

  <p>
always on. high energy unmatched. <br></br>
            <br></br>here to motivate you through every minute of your fitness
            journey. focusing on body weight movements to help you strengthen,
            condition and improve balance. rachel is ready to partner with you
            and push beyond your expectations. wherever you are. whenever you're
            ready. <br></br>let's move!{" "}</p>
</div>
    {/* <img
      src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/044/943/original/WTMpic4.png?1661781583"
      className="responsive"
      alt="woman excercising"
    /> */}

            
</section>

)}