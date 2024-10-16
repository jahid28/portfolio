import React from 'react'
import '../css/Footer.css'
import { useNavigate } from 'react-router-dom';


// import {
//   BrowserRouter as Router,
//   Link
// } from "react-router-dom";

export default function Footer() {


  // Link is better than useNavigate as they both do same thing but link is short code 
  const navigate=useNavigate()

  const conatctPage=()=>{
    navigate('/contact')
  }


  return (
    <div className='footerBody' >

      {/* <p></p> */}

      <div className='connect'>
        <p>Connect with me on :</p>
        <ul className='socialUL'>
          <li><a href="https://www.linkedin.com/in/jahid-khan-722690228/" target='_blank' rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i></a></li>
          <li><a href="https://www.instagram.com/jahidkhan_2003/" target='_blank' rel="noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
          <li><a href="https://twitter.com/28_Jahid" target='_blank' rel="noreferrer"><i className="fa-brands fa-x-twitter"></i></a></li>
          <li><a href="https://www.youtube.com/channel/UCe65gfP4Vr1_NVbZo-r-oSA" target='_blank' rel="noreferrer"><i className="fa-brands fa-youtube"></i></a></li>
          <li><a href="https://github.com/jahid28" target='_blank' rel="noreferrer"><i className="fa-brands fa-github"></i></a></li>
        </ul>
      </div>

      <div className='contact'>
        <p> Message me here :</p>
       <button onClick={conatctPage}>Contact</button>
      </div>

      <div className='resume'>
        <p>My Resume :</p>
        <a href="https://drive.google.com/file/d/1csW8IpOP9KUaIGedejnGq-C-yvFm3VBl/view?usp=sharing" target='_blank' rel="noreferrer"><button className='btnResume'>My Resume</button></a>

        {/* <a href={resume} download="Jahid's Resume"><button>Download Resume</button></a> */}
      </div>

      {/* <p></p> */}

    </div>
  )
}