import React, { useState } from 'react'
import '../css/Blog.css'
import { AnimatePresence, motion } from 'framer-motion';
export default function Blog() {

    const [articles, setArticles] = useState([])
    // const [, setArticles] = useState([])

    const fetchData = async () => {
        const url="url"
        // setPage(page + 1)
        // this.setState({ loading: true })
        let data = await fetch(url)
        let parsedata = await data.json()
        // setArticles(parsedata.items)
        // console.log(parsedata)
        // let totalResults=parsedata.pageInfo.totalResults
        console.log(parsedata)
        // setTotalResults(parsedata.totalResults)
        //  let newdata = await fetch(newurl)
        //  let newparsedata = await newdata.json()
        // setArticles(newparsedata.items)
        // console.log(newparsedata.items.snippet.title)
    
      };
    //   fetchData()

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
            
            {articles.map((e)=>{

                <p>{e}</p>

            })}

            </div>





        </div>
    )
}
