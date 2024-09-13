import React from 'react'
import '../css/Blog.css'
import { motion } from 'framer-motion';
export default function Blog() {

    return (
        <div className='blogBody'>
            <motion.div
                className='framer'
                initial={{ position: 'absolute', top: '0%' }}
                animate={{ position: 'absolute', top: '-110%' }}
                exit={{ position: 'absolute', top: '0%' }}
                transition={{ duration: .5 }}>
                <div className='transition'>
                </div>
            </motion.div>


            <h1>My Blogs</h1>

            <div>

            </div>





        </div>
    )
}
