import React from 'react'
import './Hero.css';
import resume from './Resume.pptx'

import {
  BrowserRouter as Router,
  Link,
  useNavigate
} from "react-router-dom";
import { useState } from 'react';

export default function Hero() {

  const navigate=useNavigate()

  const aboutPage=()=>{
    navigate('/about')
  }



  window.addEventListener('scroll', function () {
    let scrYHero = window.pageYOffset
    document.getElementById('bgWhoAmI').style.left = scrYHero * .6 + 'px';
  })
  // const [offsetY, setoffsetY] = useState(0)

  // window.addEventListener('scroll', function () {

  //     setoffsetY(window.pageYOffset)
  // })


  return (
    <div className='heroBody' >

      <div id='bgWhoAmI' className='bgWhoAmI'>
        <p>MYSELF</p>
      </div>

      <legend id='whoIam' className='whoIam'>
        Myself :
      </legend>

      <div id="cont" className="cont" >
      </div>

      <main id='observingThreeSkills' className='mythreeSkills'>
        <div className='iama'>I am a</div>
        <header>
          <p className="tagline">
            <span className="tagline-skill"><span className="tagline-skill_inner">Web-Developer.</span></span>
            <span className="tagline-skill"><span className="tagline-skill_inner">Graphic Designer.</span></span>
            <span className="tagline-skill"><span className="tagline-skill_inner">Youtuber.</span></span>
          </p>
        </header>
      </main>



      <div className='twoBtns'>
        {/* <Link to='/about'><button className='btnAbout'>About Me</button></Link> */}
        <button onClick={aboutPage} className='btnAbout'>About Me</button>
        <a href={resume} download='Resume'><button className='btnResume'>Download Resume</button></a>
      </div>

    </div>
  )
}
