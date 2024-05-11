import React from 'react'
// import Cards from './Cards'
import '../css/Projects.css'
import { Suspense, lazy } from 'react'

import {
  BrowserRouter as Router,
  NavLink
} from "react-router-dom";
export default function Projects() {

  const Cards = lazy(() => import('./Cards'))

  window.addEventListener('scroll', function () {
    let scrYWeb = window.pageYOffset
    // document.getElementById('bgWebsites').style.left = -scrYWeb * .6 + 'px';
    document.getElementById('bgProjects').style.left = -scrYWeb * .6 + 'px';
  })

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

        <p className='someProjects'>My Best Projects :</p>

        <div className='allJSprojects' loading='lazy'>
          <Suspense fallback={<div>Loading</div>}>
            <Cards id='card1' className='card' visit="https://twd-store.vercel.app/" image={require('../Images/Screenshot (15).png')} title='Ecommerce Site' desc='This is one my biggest project yet in which I have used MERN stack' />
          </Suspense>

          <Suspense fallback={<div>Loading</div>}>
            <Cards id='card3' className='card' visit="https://organize-hub.vercel.app/" image={require('../Images/organize_hub.png')} title='Organize Hub' desc='My first website with NextJS which is a place to take notes and add daily tasks.' />
          </Suspense>

          <Suspense fallback={<div>Loading</div>}>
            <Cards id='card4' className='card' visit="https://jahidkhanportfolio3d.netlify.app/" image={require('../Images/3denv.png')} title='3D world' desc='A 3D environment made in ThreeJS where you can explore and find interactive things.' />
          </Suspense>

          <Suspense fallback={<div>Loading</div>}>
            <Cards id='card2' className='card' visit="https://chess2003.netlify.app" image={require('../Images/Screenshot 2023-04-21 001154.png')} title='Chess' desc='Made this chess game in 2 weeks with html,css & js' />
          </Suspense>
          
          {/* <Suspense fallback={<div>Loading</div>}>
            <Cards id='card5' className='card' visit="https://tictactoe2003.netlify.app" image={require('../Images/Screenshot (116).png')} title='TicTacToe' desc='This was also a fun project to make.Also I only used html,css and javascript' />
          </Suspense> */}
          {/* <Suspense fallback={<div>Loading</div>}>
            <Cards id='card6' className='card' visit="https://calculator2003.netlify.app" image={require('../Images/Screenshot (117).png')} title='Calculator' desc='It is simple calculator to solve some basic calculations.' />
          </Suspense> */}
          <Suspense fallback={<div>Loading</div>}>
            <Cards id='card5' className='card ' visit="https://snake-and-ladder2003.netlify.app" image={require('../Images/Screenshot 2023-03-05 225457.png')} title='Snake & Ladder' desc='Simple Snake & Ladder board game.' />
          </Suspense>
          <Suspense fallback={<div>Loading</div>}>
            <Cards id='card6' className='card ' visit="https://worldmaptime.netlify.app/" image={require('../Images/Screenshot 2023-03-05 225415.png')} title='World Map' desc='It is a world map which shows the current time of any country using an API.' />
          </Suspense>
          {/* <Suspense fallback={<div>Loading</div>}>
            <Cards id='card9' className='card ' visit='https://spellingbee2003.netlify.app' image={require('../Images/Screenshot 2023-03-05 225538.png')} title='Spelling Bee' desc='A game to test your vocabulary.' />
          </Suspense> */}
          <Suspense fallback={<div>Loading</div>}>
            <Cards id='card7' className='card ' visit='https://endangered.netlify.app' image={require('../Images/endangered.png')} title='Endangered Species' desc='Website to spread awareness about endangered animals.' />
          </Suspense>
          {/* <Suspense fallback={<div>Loading</div>}>
            <Cards id='card9' className='card ' visit='https://cargame2003.netlify.app' image={require('../Images/Screenshot 2023-03-05 225522.png')} title='Car Dash' desc='A car game where you have to dodge the incoming cars.' />
          </Suspense> */}
          <Suspense fallback={<div>Loading</div>}>
            <Cards id='card8' className='card ' visit='https://underwater2003.netlify.app' image={require('../Images/underwater.png')} title='Under Water' desc='Informative website about the depth of ocean with 3D models.' />
          </Suspense>
          <Suspense fallback={<div>Loading</div>}>
            <Cards id='card9' className='card ' visit='https://3d-facetracking-experience.netlify.app/' image={require('../Images/3d-face-track.png')} title='Infinite 3D journey' desc='An infinitely long 3D journey with face tracking.' />
          </Suspense>

        </div>
        <NavLink className='allProjects' to="/allProjects">See all other projects.</NavLink>

      </div>
    </div>
  )
}
