import React from 'react'
import '../css/Youtube.css'
// import YtVideo from './YtVideo'
import { Suspense, lazy } from 'react'

export default function Youtube() {

  const YtVideo = lazy(() => import('./YtVideo'))

  window.addEventListener('scroll', function () {
    let scrYYT = window.pageYOffset
    document.getElementById('bgYoutube').style.left = -scrYYT + 'px';
  })


  return (
    <div className='ytBody' >
      <div id='bgYoutube' className='bgYoutube'>
        <p>YOUTUBE</p>
      </div>
      <p className='myYT'>My Youtube Channel:</p>
      <h2 className='para'>I have a youtube channel called <span><a href="https://www.youtube.com/channel/UCe65gfP4Vr1_NVbZo-r-oSA" target='_blank'> Techy Web Dev </a></span> where I upload tutorials and informative videos regarding web development.Here are some of my most popular videos :</h2>

      <div className='allYTVideos'>
        <Suspense fallback={<div>Loading</div>}>
          <YtVideo vidLink='https://www.youtube.com/embed/wYRRVRrK0R8'/>
        </Suspense>
        <Suspense fallback={<div>Loading</div>}>
          <YtVideo vidLink='https://www.youtube.com/embed/V8dYGNfHjfk'/>
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
