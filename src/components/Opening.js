import React, { useEffect, useState } from 'react'
import './Opening.css';

export default function Opening() {

    window.addEventListener('scroll', function () {
        let scrY = window.pageYOffset
        document.querySelector('.body').style.top = -scrY * .5 + 'px';
    })

    return (
        <div id='openingBody' className='body'>

            <a id='upArrow' href="#openingBody"><i className="fa-solid fa-circle-chevron-up"></i></a>

            <div className='heading'>
                <p className='hi'>Hi, I'm</p>
                <h1 id='myname'>Jahid Khan</h1>
                <p className='welcome'>and welcome to my portfolio</p>
            </div>

            <a href="#bgWhoAmI" className='anchor'>
                <i className="fa-solid fa-arrow-down-long arrow"></i>
            </a>


        </div>
    )
}
