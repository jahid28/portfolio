import React, { useEffect, useRef } from "react";
// import Cards from './Cards'
import '../css/Projects.css'
import { Suspense, lazy } from 'react'

import {
  // BrowserRouter as Router,
  NavLink
} from "react-router-dom";
export default function Projects() {
  const fadeInProjects = useRef(null);

  const Cards = lazy(() => import('./Cards'))

  window.addEventListener('scroll', function () {
    let scrYWeb = window.pageYOffset
    // document.getElementById('bgWebsites').style.left = -scrYWeb * .6 + 'px';
    document.getElementById('bgProjects').style.left = -scrYWeb * .6 + 'px';
  })

  useEffect(() => {
    const target = fadeInProjects.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.querySelectorAll(".fadeInProjects").forEach((item, index) => {
            item.style.animation = `fadeInAnimation .6s forwards ease-out ${
              index / 8
            }s`;
          });
          
        } else {
          document.querySelectorAll(".fadeInProjects").forEach((item, index) => {
              item.style.animation = "none";
            });
        }
      });
    });

    if (target) {
      observer.observe(target);
    }
    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return (
    <div className='projectsBody' >
      {/* <div id='bgWebsites' className='bgWebsites'>
        <p>WEBSITES</p>
      </div> */}
      {/* <p className='someProjects'>Some of my Websites :</p>
      <div className='allWebsites' loading='lazy'>
        <Suspense fallback={<div>Loading</div>}>
          <Cards id='card1' className='card' visit="https://foodsite2003.netlify.app" image={require('../Images/Screenshot (113).jpg')} title='Restaurant Site' desc='This was my third website that I made and I also added responsiveness to it.' />
        </Suspense>
        <Suspense fallback={<div>Loading</div>}>
          <Cards id='card2' className='card' visit="https://blinktrip2003.netlify.app" image={require('../Images/Screenshot (114).jpg')} title='Travel Site' desc='This was my fourth website and I used all my js knowledge(at that time) to make this.  ' />
        </Suspense>
        <Suspense fallback={<div>Loading</div>}>
          <Cards id='card3' className='card ' visit="https://newzy2003.netlify.app/" image={require('../Images/Screenshot (123).jpg')} title='News Site' desc='I made this using ReactJS and also used API for the first time. Learn alot about APIs.' />
        </Suspense>
      </div> */}

      <div className='allJSprojectsCont'>

        <div id='bgProjects' className='bgProjects'>
          <p>PROJECTS</p>
        </div>

        <div ref={fadeInProjects} className='someProjects'>
          <p className='fadeInProjects'>M</p>
          <p className='fadeInProjects' style={{marginRight:"1rem"}}>y</p>
          {/* <p className='fadeInProjects'> </p> */}
          <p className='fadeInProjects'>B</p>
          <p className='fadeInProjects'>e</p>
          <p className='fadeInProjects'>s</p>
          <p className='fadeInProjects' style={{marginRight:"1rem"}}>t</p>
          {/* <p className='fadeInProjects'> </p> */}
          <p className='fadeInProjects'>P</p>
          <p className='fadeInProjects'>r</p>
          <p className='fadeInProjects'>o</p>
          <p className='fadeInProjects'>j</p>
          <p className='fadeInProjects'>e</p>
          <p className='fadeInProjects'>c</p>
          <p className='fadeInProjects'>t</p>
          <p className='fadeInProjects'>s</p>
        </div>

        <div className='allJSprojects' loading='lazy'>

        <Suspense fallback={<div>Loading</div>}>
            <Cards id='card1' className='card ' visit="https://mycodenet.vercel.app/" image={require('../Images/codenet_pic.png')} title='CodeNet' desc='Social media app for programmers where they can share coding facts.' />
          </Suspense>

          <Suspense fallback={<div>Loading</div>}>
            <Cards id='card2' className='card' visit="https://twd-store.vercel.app/" image={require('../Images/Screenshot (15).jpg')} title='Ecommerce Site' desc='Made it using MERN stack with features like demo payment, voice search, etc' />
          </Suspense>

          <Suspense fallback={<div>Loading</div>}>
            <Cards id='card3' className='card' visit="https://jahidkhanportfolio3d.netlify.app/" image={require('../Images/3denv.png')} title='3D world' desc='A 3D environment made in ThreeJS where you can explore and find interactive things.' />
          </Suspense>

          {/* <Suspense fallback={<div>Loading</div>}>
            <Cards id='card4' className='card' visit="https://organize-hub.vercel.app/" image={require('../Images/organize_hub.png')} title='Organize Hub' desc='This was my first website using NextJS which is a place to take notes and add daily tasks.' />
          </Suspense> */}

         <Suspense fallback={<div>Loading</div>}>
            <Cards id='card4' className='card ' visit='https://r3f-10x.vercel.app/' image={require('../Images/r3f-10x.png')} title='Guide to R3F' desc='This is a guide to react-three-fibre with 10 unique and fun sections.' />
          </Suspense>

         <Suspense fallback={<div>Loading</div>}>
            <Cards id='card5' className='card ' visit='https://projectvaultangular.vercel.app/' image={require('../Images/pv_angular.png')} title='Project Vault' desc='An Angular app where you can add all your projects and share it with others.' />
          </Suspense>

          <Suspense fallback={<div>Loading</div>}>
            <Cards id='card6' className='card' visit="https://chess2003.netlify.app" image={require('../Images/Screenshot 2023-04-21 001154.png')} title='Chess' desc='Made this chess game in 2 weeks with html,css & js' />
          </Suspense>
          
          {/* <Suspense fallback={<div>Loading</div>}>
            <Cards id='card5' className='card' visit="https://tictactoe2003.netlify.app" image={require('../Images/Screenshot (116).png')} title='TicTacToe' desc='This was also a fun project to make.Also I only used html,css and javascript' />
          </Suspense> */}
          {/* <Suspense fallback={<div>Loading</div>}>
            <Cards id='card6' className='card' visit="https://calculator2003.netlify.app" image={require('../Images/Screenshot (117).png')} title='Calculator' desc='It is simple calculator to solve some basic calculations.' />
          </Suspense> */}
         
          <Suspense fallback={<div>Loading</div>}>
            <Cards id='card7' className='card ' visit="https://worldmaptime.netlify.app/" image={require('../Images/Screenshot 2023-03-05 225415.png')} title='World Map' desc='It is a world map which shows the current time of any country using an API.' />
          </Suspense>
          {/* <Suspense fallback={<div>Loading</div>}>
            <Cards id='card9' className='card ' visit='https://spellingbee2003.netlify.app' image={require('../Images/Screenshot 2023-03-05 225538.png')} title='Spelling Bee' desc='A game to test your vocabulary.' />
          </Suspense> */}
          <Suspense fallback={<div>Loading</div>}>
            <Cards id='card8' className='card ' visit='https://endangered.netlify.app' image={require('../Images/endangered.jpg')} title='Endangered Species' desc='Website to spread awareness about endangered animals.' />
          </Suspense>
          {/* <Suspense fallback={<div>Loading</div>}>
            <Cards id='card9' className='card ' visit='https://cargame2003.netlify.app' image={require('../Images/Screenshot 2023-03-05 225522.png')} title='Car Dash' desc='A car game where you have to dodge the incoming cars.' />
          </Suspense> */}
          <Suspense fallback={<div>Loading</div>}>
            <Cards id='card9' className='card ' visit='https://underwater2003.netlify.app' image={require('../Images/underwater.jpg')} title='Under Water' desc='Informative website about the depth of ocean with 3D models.' />
          </Suspense>
          {/* <Suspense fallback={<div>Loading</div>}>
            <Cards id='card9' className='card ' visit='https://3d-facetracking-experience.netlify.app/' image={require('../Images/3d-face-track.jpg')} title='Infinite 3D journey' desc='An infinitely long 3D journey with face tracking.' />
          </Suspense> */}

        </div>
        <NavLink className='allProjects' to="/allProjects">See all other projects.</NavLink>

      </div>
    </div>
  )
}
