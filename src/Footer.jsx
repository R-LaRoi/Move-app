import React from 'react'
import "./Footer.css"

export default function Footer(){

  return(


    <footer className='footer-container'>
      <ul>
    
        <li>
          <a href="https://www.rachelstroy.com/" target='_blank' >
          <i className="fa-solid fa-link" ></i></a></li>
        <li>
          <a href="https://www.linkedin.com/in/rachel-stroy-978397277/" target='_blank'>
          <i className="fa-brands fa-linkedin"></i></a></li>
        <li>
          <a href="https://github.com/R-LaRoi" target='_blank'>
          <i className="fa-brands fa-github"></i></a></li>
   <li>
     <a href= "https://open.spotify.com/playlist/02LtXdK3vRDKtKSiQxuTIq?si=0ce81940fb9d48a8">  <i className="fa-brands fa-spotify" target='_blank'>
   </i> </a>
    

   </li>
    <li>
     <a href= "https://www.acefitness.org/resources/everyone/blog/"> ACE </a>
    

   </li>
    <div className='ft'>©2023 What's The Move  Reserved</div>
      </ul>

    </footer>
  )


}

