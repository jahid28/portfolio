import React from 'react'
import '../css/Skills.css';
import { TbBrandThreejs,TbBrandNextjs } from 'react-icons/tb';
import { SiExpress,SiTypescript,SiTailwindcss,SiBlender } from 'react-icons/si';
export default function Skills() {


    return (
        <div className='skillBody' >
            <p className='myskills'>My Skills :</p>

            <section>
                <div className='allskills'>
                    <p><i className="fa-brands fa-html5"></i> HTML</p>
                    <p><i className="fa-brands fa-css3-alt"></i> CSS</p>
                    <p><i className="fa-brands fa-bootstrap"></i> Bootstrap  </p>
                    <p  > <SiTailwindcss className='tailwind'/> Tailwind  </p>
                    <p><i className="fa-brands fa-js"></i> Javascript  </p>
                    <p ><SiTypescript className='typescript'/> Typescript  </p>
                    <p><i className="fa-brands fa-react"></i> ReactJS  </p>
                    <p> <TbBrandNextjs/> Next JS</p>
                    <p><i class="fa-brands fa-node-js"></i> NodeJS  </p>
                    <p><SiExpress/> ExpressJS  </p>
                    <p><i class="fa-brands fa-envira"></i> MongoDB  </p>
                    <p><i className="fa-brands fa-github-square"></i> Git/GitHub</p>
                    <p> <TbBrandThreejs/> Three JS</p>
                    <p> <SiBlender className='blender' /> Blender 3D</p>
                    
                    {/* <p><i className="fa-brands fa-wordpress"></i> Wordpress  </p> */}
                    {/* <p><i className="fa-brands fa-figma"></i> Figma  </p> */}
                </div>

                <div className='allStars'>
                    <p className='fiveStars'> = <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star-half-stroke"></i></p>
                    <p className='fiveStars'> = <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star-half-stroke"></i></p>
                    {/* <p className='fiveStars'> = <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star-half-stroke"></i><i className="fa-regular fa-star"></i></p> */}
                    <p className='fiveStars'> = <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i></p>
                    <p className='fiveStars'> = <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i></p>
                    <p className='fiveStars'> = <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i></p>
                    {/* <p className='fiveStars'> = <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i></p> */}
                    <p className='fiveStars'> = <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i></p>
                    <p className='fiveStars'> = <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i></p>
                    <p className='fiveStars'> = <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i></p>
                    <p className='fiveStars'> = <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i></p>
                    <p className='fiveStars'> = <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i></p>
                    <p className='fiveStars'> = <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i></p>
                    {/* <p className='fiveStars'> = <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i></p> */}
                    {/* <p className='fiveStars'> = <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i></p> */}
                    <p className='fiveStars'> = <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i></p>
                    <p className='fiveStars'> = <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i></p>
                    <p className='fiveStars'> = <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i></p>
                </div>


                <div className='skillRotateBigCont'>
                    <main className='skillRotateCont' loading='lazy'>
                        <h2 className="skillRotateh2 eachSkill1"  >HTML</h2>
                        <h2 className="skillRotateh2 eachSkill2" >NodeJS</h2>
                        <h2 className="skillRotateh2 eachSkill3" >CSS</h2>
                        <h2 className="skillRotateh2 eachSkill4" >NextJS</h2>
                        <h2 className="skillRotateh2 eachSkill5" >Blender</h2>
                        <h2 className="skillRotateh2 eachSkill6" >React</h2>
                        <h2 className="skillRotateh2 eachSkill7" >ThreeJS</h2>
                        <h2 className="skillRotateh2 eachSkill8" >Tailwind</h2>
                    </main>
                </div>
            </section>
        </div>
    )
}
