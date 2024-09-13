import React from 'react'
import '../css/Hero.css';

import {
  // BrowserRouter as Router,
  // Link,
  useNavigate
} from "react-router-dom";

export default function Hero() {

  const navigate = useNavigate()

  const aboutPage = () => {
    navigate('/about')
  }



  window.addEventListener('scroll', function () {
    let scrYHero = window.pageYOffset
    document.getElementById('bgWhoAmI').style.left = scrYHero * .6 + 'px';
  })
 

  function mouseover(e) {
  
    let val = e.target.innerText
    let arr = Array.from(val)
    let xx = Number(arr.splice(0, 3).join(''))  // Join first part
let yy = Number(arr.join(''))               // Join remaining part

// Parse the expressions safely using custom logic (for numbers and operators)
// let safeEval = (str) => {
//     return new Function('return ' + str)(); // Safely evaluate expressions like "1+2"
// };

// xx = safeEval(xx);
// yy = safeEval(yy);
//     // console.log(xx,yy)
      document.getElementById('cont').style.transform = `perspective(1200px) rotateX(${xx}deg) rotateY(${yy}deg)`
      
    }
    
  //   function mouseover4(){
      
  //     document.getElementById('cont').style.transform = `perspective(1200px) rotateX(0deg) rotateY(-25deg)`
  // }



  function mouseleave() {
    document.getElementById('cont').style.transform = 'none'

  }


  return (
    <div className='heroBody' >

      <div id='bgWhoAmI' className='bgWhoAmI'>
        <p>MYSELF</p>
      </div>

      <legend id='whoIam' className='whoIam'>
        Myself :
      </legend>



      <div onMouseLeave={mouseleave}  id="cont" className="cont">
        <div onMouseOver={mouseover}  id="sq1" class="sq">+20-25</div>
        <div onMouseOver={mouseover}  id="sq2" class="sq">+20+.1</div>
        <div onMouseOver={mouseover}  id="sq3" class="sq">+20+25</div>
        <div onMouseOver={mouseover}  id="sq4" class="sq">+.1-25</div>
        <div onMouseOver={mouseover}  id="sq5" class="sq">+.1+.1</div>
        <div onMouseOver={mouseover}  id="sq6" class="sq">+.1+25</div>
        <div onMouseOver={mouseover}  id="sq7" class="sq">-20-25</div>
        <div onMouseOver={mouseover}  id="sq8" class="sq">-20+.1</div>
        <div onMouseOver={mouseover}  id="sq9" class="sq">-20+25</div>
      </div>

      <main id='observingThreeSkills' className='mythreeSkills'>
        <div className='iama'>I am a <span>Fullstack Developer</span></div>
        {/* <header>
          <p className="tagline">
            <span className="tagline-skill"><span className="tagline-skill_inner">Developer</span></span>
            <span className="tagline-skill"><span className="tagline-skill_inner">3D Artist</span></span>
            <span className="tagline-skill"><span className="tagline-skill_inner">Youtuber</span></span>
          </p>
        </header> */}
      </main>



      <div className='twoBtns'>
        {/* <Link to='/about'><button className='btnAbout'>About Me</button></Link> */}
        <button onClick={aboutPage} className='btnAbout'>About Me</button>
        <a href="https://drive.google.com/file/d/1tQDHsrWIO8o8i4kM_Qu-ag6WaDPyN4oe/view?usp=sharing" target='_blank' rel="noreferrer"><button className='btnResume'>My Resume</button></a>
        {/* <a href={resume} download="Jahid's Resume"><button className='btnResume'>Download Resume</button></a> */}
      </div>

    </div>
  )
}
