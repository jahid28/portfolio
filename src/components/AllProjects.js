import React, { useEffect } from 'react'
import "../css/AllProjects.css"
const AllProjects = () => {
    useEffect(() => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0;
    },[])
  return (
    <div>
        <div className='allProjectsP'>
          <p>Here are my all other projects :</p>
        </div>

        <div className='allPCont'>


        <a className='singleProject' href='https://organize-hub.vercel.app/' target='_blank' rel='noreferrer'>
            <img className='projectImg' src={require('../Images/organize_hub.png')} alt="" />
            <p className='projectDesc'>Organize Hub</p>
        </a>

        <a className='singleProject' href='https://3d-facetracking-experience.netlify.app/' target='_blank' rel='noreferrer'>
            <img className='projectImg' src={require('../Images/3d-face-track.jpg')} alt="" />
            <p className='projectDesc'>Infinite 3D journey</p>
        </a>

        <a className='singleProject' href='https://snake-and-ladder2003.netlify.app/' target='_blank' rel='noreferrer'>
            <img className='projectImg' src={require('../Images/Screenshot 2023-03-05 225457.jpg')} alt="" />
            <p className='projectDesc'>Simple snake & ladder game</p>
        </a>

        <a className='singleProject' href='https://3dcarmodel.netlify.app/' target='_blank' rel='noreferrer'>
            <img className='projectImg' src={require('../Images/alfa.png')} alt="" />
            <p className='projectDesc'>A 3D website about the car Alfa Romeo</p>
        </a>

        <a className='singleProject' href='https://connect4-2003.netlify.app/' target='_blank' rel='noreferrer'>
            <img className='projectImg' src={require('../Images/connect4.png')} alt="" />
            <p className='projectDesc'>Connect 4 game</p>
        </a>

        {/* <a className='singleProject' href='https://3dcarmodel.netlify.app/' target='_blank'>
            <img className='projectImg' src={require('../Images/donthover.png')} alt="" />
            <p className='projectDesc'>A simple game where you have to move cursor away from a button</p>
        </a> */}


        {/* <a className='singleProject' href='https://3dfollow.netlify.app/' target='_blank'>
            <img className='projectImg' src={require('../Images/Screenshot (120).jpg')} alt="" />
            <p className='projectDesc'>CSS 3D hover effect</p>
        </a> */}

        <a className='singleProject' href='https://fashionsite2003.netlify.app/' target='_blank' rel='noreferrer'>
            <img className='projectImg' src={require('../Images/fashion.jpg')} alt="" />
            <p className='projectDesc'>Fashion Website which is also responsive</p>
        </a>

        <a className='singleProject' href='https://vtransformerhuggingface.netlify.app/' target='_blank' rel='noreferrer'>
            <img className='projectImg' src={require('../Images/hf.png')} alt="" />
            <p className='projectDesc'>A dog breed finder where I used a huggingface API</p>
        </a>

        <a className='singleProject' href='https://spellingbee2003.netlify.app/' target='_blank' rel='noreferrer'>
            <img className='projectImg' src={require('../Images/Screenshot 2023-03-05 225538.png')} alt="" />
            <p className='projectDesc'>Spelling Bee contest website</p>
        </a>

        <a className='singleProject' href='https://cargame2003.netlify.app/' target='_blank' rel='noreferrer'>
            <img className='projectImg' src={require('../Images/Screenshot 2023-03-05 225522.png')} alt="" />
            <p className='projectDesc'>A car game controlled by WASD keys</p>
        </a>

        <a className='singleProject' href='https://2000s.netlify.app/' target='_blank' rel='noreferrer'>
            <img className='projectImg' src={require('../Images/2000.png')} alt="" />
            <p className='projectDesc'>2000s themed webiste with a modern twist (ofcourse it is not responsive lol)</p>
        </a>

        <a className='singleProject' href='https://3dcontact.netlify.app/' target='_blank' rel='noreferrer'>
            <img className='projectImg' src={require('../Images/3dcontact.jpg')} alt="" />
            <p className='projectDesc'>Beautiful contact form with 3d effect in CSS</p>
        </a>

        <a className='singleProject' href='https://calculator2003.netlify.app/' target='_blank' rel='noreferrer'>
            <img className='projectImg' src={require('../Images/Screenshot (117).png')} alt="" />
            <p className='projectDesc'>A simple calculator</p>
        </a>

        <a className='singleProject' href='https://unclick.netlify.app/' target='_blank' rel='noreferrer'>
            <img className='projectImg' src={require('../Images/unclick.png')} alt="" />
            <p className='projectDesc'>Try to click the button in this game</p>
        </a>

        <a className='singleProject' href='https://blinktrip2003.netlify.app/' target='_blank' rel='noreferrer'>
            <img className='projectImg' src={require('../Images/Screenshot (114).jpg')} alt="" />
            <p className='projectDesc'>Tourism website with HTML, CSS and some JS. This was my 4th website which I made.</p>
        </a>

        </div>
    </div>
  )
}

export default AllProjects
