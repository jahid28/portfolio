import React from "react";
import "../css/Skills.css";
import { TbBrandThreejs, TbBrandNextjs } from "react-icons/tb";
import {
  SiExpress,
  SiTypescript,
  SiTailwindcss,
  SiBlender,
  SiPython,
  SiAmazonaws,
  SiMongodb,
  SiLinux,
  SiGnubash,
  SiGithub
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiRedis } from "react-icons/di";

export default function Skills() {
  return (
    <div className="skillBody">
      <p className="myskills">My Skills :</p>

      <section>
        {/* <div className="allskills allskills1"> */}
          <h2>Frontend Development :</h2>
        <div className="frontend">

          <div className="eachSkill">
            <p>
              <i className="fa-brands fa-html5"></i>HTML
            </p>
            {/* <p>HTML</p> */}
            {/* <p className="fiveStars">
              = <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half-stroke"></i>
            </p> */}
          </div>

          <div className="eachSkill">
            <p>
              <i className="fa-brands fa-css3-alt"></i>CSS
            </p>
            {/* <p>CSS</p> */}
            {/* <p className="fiveStars">
              = <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half-stroke"></i>
            </p> */}
          </div>

          <div className="eachSkill">
            <p>
              <SiTailwindcss className="tailwind i" />Tailwind
            </p>
            {/* <p>Tailwind</p> */}
            {/* <p className="fiveStars">
              = <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </p> */}
          </div>

          <div className="eachSkill">
            <p>
              <i className="fa-brands fa-js"></i>Javascript
            </p>
            {/* <p>Javascript</p> */}
            {/* <p className="fiveStars">
              = <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </p> */}
          </div>

          <div className="eachSkill">
            <p>
              <SiTypescript className="typescript i" />Typescript
            </p>
            {/* <p>Typescript</p> */}
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
              <i className="fa-brands fa-react"></i>React JS
            </p>
            {/* <p>React JS</p> */}
            {/* <p className="fiveStars">
              = <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </p> */}
          </div>

          <div className="eachSkill">
            <p>
              <TbBrandNextjs className="i"/>Next JS
            </p>
            {/* <p>Next JS</p> */}
            {/* <p className="fiveStars">
              = <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </p> */}
          </div>
        </div>

          <h2>Backend Development :</h2>
        <div className="backend">

          <div className="eachSkill">
            <p>
              <i class="fa-brands fa-node-js"></i>Node JS
            </p>
            {/* <p>Node JS</p> */}
            {/* <p className="fiveStars">
              = <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </p> */}
          </div>

          <div className="eachSkill">
            <p>
              <SiExpress className="i" />Express JS
            </p>
            {/* <p>Express JS</p> */}
            {/* <p className="fiveStars">
              = <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </p> */}
          </div>

          <div className="eachSkill">
            <p>
              <SiMongodb className="mongodb i" />MongoDB
            </p>
            {/* <p>MongoDB</p> */}
            {/* <p className="fiveStars">
              = <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </p> */}
          </div>

          <div className="eachSkill">
            <p>
              <BiLogoPostgresql className="postgre i" />PostgreSQL
            </p>
            {/* <p>PostgreSQL</p> */}
            {/* <p className="fiveStars">
              = <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </p> */}
          </div>

          <div className="eachSkill">
            <p>
              <DiRedis className="redis i" />Redis
            </p>
            {/* <p>Redis</p> */}
            {/* <p className="fiveStars">
              = <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </p> */}
          </div>
        </div>

          <h2>3D Development :</h2>
        <div className="3d">

          <div className="eachSkill">
            <p>
              <SiBlender className="blender i" />Blender 3D
            </p>
            {/* <p>Blender 3D</p> */}
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
              {" "}
              <TbBrandThreejs className="i"/>Three JS
            </p>
            {/* <p>Three JS</p> */}
            {/* <p className="fiveStars">
              = <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </p> */}
          </div>
        </div>

          <h2>Devops :</h2>
        <div className="devops">

          <div className="eachSkill">
            <p>
              <SiLinux className="i" />Linux
            </p>
            {/* <p>Linux</p> */}
            {/* <p className="fiveStars">
              = <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </p> */}
          </div>

          <div className="eachSkill">
            <p>
              <SiGithub className="github i"/>Git/GitHub
            </p>
            {/* <p>Git/GitHub</p> */}
            {/* <p className="fiveStars">
              = <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </p> */}
          </div>

          <div className="eachSkill">
            <p>
              <SiGnubash className="i"/>Bash
            </p>
            {/* <p>Bash</p> */}
            {/* <p className="fiveStars">
              = <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </p> */}
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
        </div>
      </section>

      <div className="skillRotateBigCont" loading="lazy">
        <main className="skillRotateCont" loading="lazy">
          <h2 className="skillRotateh2 eachSkill1">HTML</h2>
          <h2 className="skillRotateh2 eachSkill2">NodeJS</h2>
          <h2 className="skillRotateh2 eachSkill3">CSS</h2>
          <h2 className="skillRotateh2 eachSkill4">NextJS</h2>
          <h2 className="skillRotateh2 eachSkill5">Blender</h2>
          <h2 className="skillRotateh2 eachSkill6">React</h2>
          <h2 className="skillRotateh2 eachSkill7">ThreeJS</h2>
          <h2 className="skillRotateh2 eachSkill8">Tailwind</h2>
        </main>
      </div>
    </div>
  );
}
