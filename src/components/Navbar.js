import React, { useEffect, useState } from 'react'
import '../css/Navbar.css';

import {
    BrowserRouter as Router,
    NavLink
} from "react-router-dom";

export default function Navbar() {
    const [mode,setState]=useState('darkmode')
    
    function lightMode(){
        document.getElementById('dot').classList.toggle('active')

        mode==='darkmode' ? setState('lightmode') : setState('darkmode')

    }
    document.body.className=mode
    
    function toggle(e) {
        document.getElementById('header').classList.toggle('active')
        document.getElementById('tog').classList.toggle('active')
    }

    function removeToggle() {
        document.getElementById('header').classList.remove('active')
        document.getElementById('tog').classList.remove('active')

    }


    return (
        <div id='body'>
            <i onClick={toggle} id='tog' className="fa-solid fa-bars tog"></i>


            <header id='header' className="header">
                <div onClick={lightMode} className='toggle'>
                    <i class="fa-solid fa-moon"></i>
                    <i class="fa-solid fa-sun"></i>
                    <p className='dot' id='dot'></p>

                </div>
                <ul>
                    <p onClick={removeToggle}><NavLink className='allLists' to="/"><p className='allLinks navHome'>&lt;Home/&gt;</p></NavLink></p>
                    <p onClick={removeToggle}><NavLink className='allLists' to="/about"><p className='allLinks navAbout'>&lt;About/&gt;</p></NavLink></p>
                    <p onClick={removeToggle}><NavLink className='allLists' to="/contact"><p className='allLinks navContact'>&lt;Contact/&gt;</p></NavLink></p>
                    {/* <p onClick={removeToggle}><NavLink className='allLists' to="/blog"><p className='allLinks navBlog'>Blog</p></NavLink></p> */}
                </ul>
            </header>

        </div>
    )
}
