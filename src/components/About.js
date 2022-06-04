import React from 'react'
import './About.css'
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
          <img loading='lazy' src={require('./portfolioTransition.png')} alt="" />
        </div>

        <div className='aboutContent' >
          <p>Hello everyone, I am Jahid Khan, age 19 as of 2022 and I am from New Delhi, India.
            I have always an intesrest to learn and write code, I had a pretty good knowledge of
            Python from my school days, so it was easy to grab the concepts of C++. After learning
            some basic concepts of C++ I move on to learn Web-Development in Janauary 2022.
            Then in March, I launched my youtube channel called 'Techy Web Dev' to teach Web-Dev, I upload tutorials and
            various projects made with html, css, js on my channel. In May, after learnning alot of
            front-end development, am currently learning ReactJS(infact I made this portfolio with react). After that I will
            start practicing DSA in C++ and will grab those basic concepts back.
            <br />
            Now, after reading my whole coding journey if you have any questions or feedback
            or just want to talk to me, you can send me a message by going to Contact Page.
            <br />
            Thankyou so much for reading this 😊.
            <br />
            <span>-updated on May,2022</span>
          </p>
        </div>
      </div>

    </div>
  )
}
