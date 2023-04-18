import React, { useState } from 'react'
import '../css/Blog.css'
import { AnimatePresence, motion } from 'framer-motion';
export default function Blog() {

    const [articles, setArticles] = useState([])
    // const [, setArticles] = useState([])

    const fetchData = async () => {
        // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=633989d407d145059f015c2a962dce3c&page=${page + 1}&pageSize=${props.pageSize}`
        const url=`https://www.googleapis.com/youtube/v3/search?key=AIzaSyAlqBkmh9PNmnfg39nAbkucFmMKfcfg_3g&channelId=UCe65gfP4Vr1_NVbZo-r-oSA&part=snippet,id&order=date`
        // setPage(page + 1)
        // this.setState({ loading: true })
        let data = await fetch(url)
        let parsedata = await data.json()
        // setArticles(parsedata.items)
        // console.log(parsedata)
        // let totalResults=parsedata.pageInfo.totalResults
        console.log(parsedata)
        // setTotalResults(parsedata.totalResults)
        // const newurl=`https://www.googleapis.com/youtube/v3/search?key=AIzaSyAlqBkmh9PNmnfg39nAbkucFmMKfcfg_3g&channelId=UCe65gfP4Vr1_NVbZo-r-oSA&part=snippet,id&order=date&maxResults=5`
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
