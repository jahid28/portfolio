import React from 'react'
import '../css/YtVideo.css'

export default function YtVideo(props) {
    // <div className='YtvidButton'>
    //     <a href={props.aLink} target='_blank'>Watch on Youtube</a>
    // </div>
    return (
        <div className='YtVideoBody' >

            <iframe title={'myvideo'+props.ytID} id={props.ytID} className='video' src={props.vidLink} allowFullScreen frameBorder="0"></iframe>

        </div>
    )
}
