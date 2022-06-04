import React, { useEffect, useState } from 'react'
import './Navbar.css';

import {
    BrowserRouter as Router,
    NavLink
} from "react-router-dom";

export default function Navbar() {

    function toggle(e) {
        document.getElementById('header').classList.toggle('active')
        document.getElementById('tog').classList.toggle('active')
    }


    return (
        <div >
            <i onClick={toggle} id='tog' className="fa-solid fa-bars tog"></i>

            <header id='header' className="header">
                <ul>
                    <NavLink className='allLists' to="/"><p className='allLinks navHome'>Home</p></NavLink>
                    <NavLink className='allLists' to="/about"><p className='allLinks navAbout'>About</p></NavLink>
                    <NavLink className='allLists' to="/contact"><p className='allLinks navContact'>Contact</p></NavLink>
                </ul>
            </header>

        </div>
    )
}
