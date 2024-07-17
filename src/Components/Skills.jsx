import React from "react";
import Progress from "./Progressbar";
import { useState, useEffect } from "react";

const Skills = () => {

  const [value, setValue] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setValue((val) => val + 1);
    }, 50);
  }, []);

  return (
    <>
    <h2 className='mt-6 text-2xl  font-bold text-center'>My Acquired Skills</h2>
    <hr className='border-4  border-red-400 w-3/4 ml-28'></hr>

      <div className="grid grid-cols-2 p-4 " id="skills">
       
        <div className="" id="fskills">
        <h2 className="font-bold text-2xl text-yellow-400 text-center mb-3">FrontEnd</h2>
          <div className="rounded gap-2 flex justify-between" id="fbox">
          <span className="span">JavaScript</span>
            <Progress value={65}/>
          </div>
          <br />
          <div className="rounded" id="fbox">
          <span className="span">ReactJs</span>
            <Progress value={value}/>
          </div>
          <br />

          <div className="rounded" id="fbox">
          <span className="span">Bootstrap</span>
            <Progress value={value}/>         
             </div>
          <br />
          <div className="rounded" id="fbox">
          <span className="span">TailwindCss</span>
            <Progress value={value}/>          </div>
          <br />
          <div className="rounded" id="fbox">
          <span className="span">HTML</span>
            <Progress value={value}/>
          </div>
        </div>

        <div className="" id="bskills">
        <h2 className="font-bold text-2xl text-yellow-400 text-center mb-3">BackEnd</h2>
          <div className="rounded" id="bbox">
          <span className="span">NodeJs</span>
            <Progress value={value}/>
          </div>
          <br />
          <div className="rounded" id="bbox">
          <span className="span">ExpressJs</span>
            <Progress value={value}/>          </div>
          <br />
          <div className="rounded" id="bbox">
          <span className="span">Python</span>
            <Progress value={value}/>
          </div>
          <br />
          <div className="rounded" id="bbox">
            <span className="span">MongoDB</span>
            <Progress value={value}/>
          </div>
          <br />
          <div className="rounded" id="bbox">
          <span className="span">SQL</span>
            <Progress value={value}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
