import React, { useEffect, useRef } from "react";
import '../css/Youtube.css'
// import YtVideo from './YtVideo'
import { Suspense, lazy } from 'react'

export default function Youtube() {
  const fadeInYT = useRef(null);

  const YtVideo = lazy(() => import('./YtVideo'))

  window.addEventListener('scroll', function () {
    let scrYYT = window.pageYOffset
    document.getElementById('bgYoutube').style.left = -scrYYT -50+ 'px';
  })

  useEffect(() => {
    const target = fadeInYT.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.querySelectorAll(".fadeInYT").forEach((item, index) => {
            item.style.animation = `fadeInAnimation .6s forwards ease-out ${
              index / 8
            }s`;
          });
          
        } else {
          document.querySelectorAll(".fadeInYT").forEach((item, index) => {
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
    <div className='ytBody' >
      <div id='bgYoutube' className='bgYoutube'>
        <p>YOUTUBE</p>
      </div>
      <div ref={fadeInYT} className='myYT'>
        <p className='fadeInYT'>M</p>
        <p className='fadeInYT' style={{marginRight:"1rem"}}>y</p>
        <p className='fadeInYT'>Y</p>
        <p className='fadeInYT'>o</p>
        <p className='fadeInYT'>u</p>
        <p className='fadeInYT'>T</p>
        <p className='fadeInYT'>u</p>
        <p className='fadeInYT'>b</p>
        <p className='fadeInYT' style={{marginRight:"1rem"}}>e</p>
        <p className='fadeInYT'>C</p>
        <p className='fadeInYT'>h</p>
        <p className='fadeInYT'>a</p>
        <p className='fadeInYT'>n</p>
        <p className='fadeInYT'>n</p>
        <p className='fadeInYT'>e</p>
        <p className='fadeInYT'>l</p>

      </div>
      <h2 className='para'>I have a YouTube channel called <span><a href="https://www.youtube.com/channel/UCe65gfP4Vr1_NVbZo-r-oSA" target='_blank' rel="noreferrer"> Techy Web Dev </a></span> where I upload tutorials and informative videos regarding web development. Here are some of my most popular videos :</h2>

      <div className='allYTVideos'>
        <Suspense fallback={<div>Loading</div>}>
          <YtVideo vidLink='https://www.youtube.com/embed/V8dYGNfHjfk'/>
        </Suspense>
        <Suspense fallback={<div>Loading</div>}>
          <YtVideo vidLink='https://www.youtube.com/embed/wYRRVRrK0R8'/>
        </Suspense>
        <Suspense fallback={<div>Loading</div>}>
          <YtVideo vidLink='https://www.youtube.com/embed/S9eCBX-Re8A'/>
        </Suspense>
        <Suspense fallback={<div>Loading</div>}>
          <YtVideo vidLink='https://www.youtube.com/embed/WtoyIiOp5Aw'/>
        </Suspense>
        <Suspense fallback={<div>Loading</div>}>
          <YtVideo vidLink='https://www.youtube.com/embed/KZB6gtKQ9_I'/>
        </Suspense>
        <Suspense fallback={<div>Loading</div>}>
          <YtVideo vidLink='https://www.youtube.com/embed/dcRqXrl5804'/>
        </Suspense>
        
      </div>
    </div>
  )
}
