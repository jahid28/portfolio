import React, { memo } from 'react'
import '../css/About.css'
import { AnimatePresence, motion } from 'framer-motion';
export default function About() {
  return (
    <div className='aboutBody' >

      <motion.div
        className='framer'
        initial={{ position: 'absolute', top: '0%' }}
        animate={{ position: 'absolute', top: '-110%' }}
        exit={{ position: 'absolute', top: '0%' }}
        transition={{ duration: .5 }}>
        <div className='transition'>
        </div>
      </motion.div>

      <div className='mainContent'>
        <div className='aboutImg'>
          <img loading='lazy' src={require('../Images/pexels-miguel-á-padriñán-2882509.jpg')} alt="aboutImg" />
        </div>


        <div className='aboutContent' >
          <p>Hello Everyone, my name is Jahid Khan, and I'm a 20-year-old native of New Delhi, India.
            I am currently in 3rd year of my college(BPIT, New Delhi) studying Information Technology in B-Tech.
            Talking about my coding journey, I have always been interested in learning and writing code,
            hence I started my real coding journey by learning some fundamentals of web development back
            in November, 2021. And till now (March, 2024) I have came a long way in web development and am 
            also learning some DSA and Devops along with it.
            <br />

            In between this journey, I launched my YouTube channel called "Techy Web Dev" in March,2022 to share my Web-Dev knowledge.
            Apart from coding, I enjoy listening to music and sometimes playing online games.
            <br />
            <br />
            Now that you've read about me, if you have any questions, comments, or you
            just want to chat, you can contact me by visiting to the Contact Page.
            <br />
            <br />
            <span>- last updated March, 2024</span>
          </p>
        </div>
      </div>

     

    </div>
  )
}