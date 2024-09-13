import React from "react";
import "../css/Skills.css";
import { TbBrandThreejs, TbBrandNextjs } from "react-icons/tb";
import {
  SiExpress,
  SiTypescript,
  SiTailwindcss,
  SiBlender,
  // SiPython,
  SiAmazonaws,
  SiMongodb,
  SiLinux,
  SiGnubash,
  SiGithub
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import { FaAngular,FaDocker } from "react-icons/fa";
import { FaJenkins } from "react-icons/fa6";
import { SiAnsible,SiKubernetes } from "react-icons/si";

export default function Skills() {
  return (
    <div className="skillBody">
      <p className="myskills">My Skills :</p>

      <section>
          <h2>Frontend Development :</h2>
        <div className="frontend">

          <div className="eachSkill">
            <p>
              <i className="fa-brands fa-html5"></i>HTML
            </p>
            
          </div>

          <div className="eachSkill">
            <p>
              <i className="fa-brands fa-css3-alt"></i>CSS
            </p>
          
          </div>

          <div className="eachSkill">
            <p>
              <SiTailwindcss className="tailwind i" />Tailwind
            </p>
           
          </div>

          <div className="eachSkill">
            <p>
              <i className="fa-brands fa-js"></i>Javascript
            </p>
           
          </div>

          <div className="eachSkill">
            <p>
              <SiTypescript className="typescript i" />Typescript
            </p>
           
          </div>

          <div className="eachSkill">
            <p>
              <i className="fa-brands fa-react"></i>React JS
            </p>
           
          </div>

          <div className="eachSkill">
            <p>
              <FaAngular className="a-icon"/>Angular JS
            </p>
           
          </div>
          <div className="eachSkill">
            <p>
              <TbBrandNextjs className="i"/>Next JS
            </p>
           
          </div>
        </div>

          <h2>Backend Development :</h2>
        <div className="backend">

          <div className="eachSkill">
            <p>
              <i class="fa-brands fa-node-js"></i>Node JS
            </p>
           
          </div>

          <div className="eachSkill">
            <p>
              <SiExpress className="i" />Express JS
            </p>
            
          </div>

          {/* <div className="eachSkill">
            <p>
              <FaPhp className="php" />PHP
            </p>
            
          </div> */}

          <div className="eachSkill">
            <p>
              <SiMongodb className="mongodb i" />MongoDB
            </p>
          </div>

          <div className="eachSkill">
            <p>
              <BiLogoPostgresql className="postgre i" />PostgreSQL
            </p>
          </div>

          <div className="eachSkill">
            <p>
              <DiRedis className="redis i" />Redis
            </p>
          </div>
        </div>

          <h2>3D Development :</h2>
        <div className="3d">

          <div className="eachSkill">
            <p>
              <SiBlender className="blender i" />Blender 3D
            </p>
          
          </div>

          <div className="eachSkill">
            <p>
              <TbBrandThreejs className="i"/>Three JS
            </p>
            
          </div>

          <div className="eachSkill">
            <p>
              <TbBrandThreejs className="i"/>R3F
            </p>
            
          </div>
        </div>

          <h2>Devops :</h2>
        <div className="devops">

          <div className="eachSkill">
            <p>
              <SiLinux className="i" />Linux
            </p>
           
          </div>

          <div className="eachSkill">
            <p>
              <SiGithub className="github i"/>Git/GitHub
            </p>
          
          </div>

          <div className="eachSkill">
            <p>
              <SiGnubash className="i"/>Bash
            </p>
           
          </div>

          <div className="eachSkill">
            <p>
              <SiAmazonaws className="aws i" />AWS
            </p>
            {/* <p>AWS</p> */}
            {/* <p className="fiveStars">
              = <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              </p> */}
          </div>

              <div className="eachSkill">
                <p>
                  <FaJenkins className="jenkins i"/>Jenkins
                </p>
               
              </div>
              <div className="eachSkill">
                <p>
                  <SiAnsible className="i"/>Ansible
                </p>
               
              </div>
              <div className="eachSkill">
                <p>
                  <FaDocker className="docker i"/>Docker
                </p>
               
              </div>
              <div className="eachSkill">
                <p>
                  <SiKubernetes className="kuber i"/>Kubernetes
                </p>
               
              </div>
        </div>
      </section>

      <div className="skillRotateBigCont" loading="lazy">
        <main className="skillRotateCont" loading="lazy">
          <h2 className="skillRotateh2 eachSkill1">HTML</h2>
          <h2 className="skillRotateh2 eachSkill2">NodeJS</h2>
          <h2 className="skillRotateh2 eachSkill3">CSS</h2>
          <h2 className="skillRotateh2 eachSkill4">NextJS</h2>
          <h2 className="skillRotateh2 eachSkill5">Linux</h2>
          <h2 className="skillRotateh2 eachSkill6">React</h2>
          <h2 className="skillRotateh2 eachSkill7">ThreeJS</h2>
          <h2 className="skillRotateh2 eachSkill8">Tailwind</h2>
        </main>
      </div>
    </div>
  );
}
