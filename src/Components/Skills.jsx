import React from "react";
import Progress from "./Progressbar";
import { useState, useEffect } from "react";

const Skills = () => {

  const [progress, setProgress] = useState({
    html: 0,
    css: 0,
    javaScript: 0,
    jQuery: 0,
    react: 0,
    tailwind: 0,
    nodejs: 0,
    express: 0,
    mongodb: 0,
    mariadb: 0,
    restApi: 0,
  });

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prevProgress => ({
        html: prevProgress.html < 80 ? prevProgress.html + 1 : prevProgress.html,
        css: prevProgress.css < 75 ? prevProgress.css + 1 : prevProgress.css,
        javaScript: prevProgress.javaScript < 80 ? prevProgress.javaScript + 1 : prevProgress.javaScript,
        jQuery: prevProgress.jQuery < 70 ? prevProgress.jQuery + 1 : prevProgress.jQuery,
        react: prevProgress.react < 75 ? prevProgress.react + 1 : prevProgress.react,
        tailwind: prevProgress.tailwind < 70 ? prevProgress.tailwind + 1 : prevProgress.tailwind,
        nodejs: prevProgress.nodejs < 60 ? prevProgress.nodejs + 1 : prevProgress.nodejs,
        express: prevProgress.express < 65 ? prevProgress.express + 1 : prevProgress.express,
        mongodb: prevProgress.mongodb < 60 ? prevProgress.mongodb + 1 : prevProgress.mongodb,
        mariadb: prevProgress.mariadb < 40 ? prevProgress.mariadb + 1 : prevProgress.mariadb,
        restApi: prevProgress.restApi < 60 ? prevProgress.restApi + 1 : prevProgress.restApi,
      }));
    }, 50);
    return () => {
      clearInterval(progressInterval);
    };
  }, []);

  const progressData = [
    { name: 'HTML', value: progress.html, target: 80 },
    { name: 'CSS', value: progress.css, target: 75 },
    { name: 'JavaScript', value: progress.javaScript, target: 80 },
    { name: 'jQuery', value: progress.jQuery, target: 70 },
    { name: 'ReactJS', value: progress.react, target: 75 },
    { name: 'TailwindCSS', value: progress.tailwind, target: 70 },
    { name: 'NodeJS', value: progress.nodejs, target: 60 },
    { name: 'ExpressJS', value: progress.express, target: 65 },
    { name: 'MongoDB', value: progress.mongodb, target: 60 },
    { name: 'MariaDB', value: progress.mariadb, target: 40 },
    { name: 'REST API', value: progress.restApi, target: 60 },
  ];

  const frontendData = progressData.slice(0, 6);
  const backendData = progressData.slice(6);

  return (
    <>
      <h2 className='mt-6 text-2xl  font-bold text-center'>My Acquired Skills</h2>
      <hr className='border-4  border-red-400 w-3/4 ml-28'></hr>

      <div className="grid grid-cols-2 p-4 " id="skills">

          <div className="flex-1 w-[40vw]" id="">
            <h2 className="text-xl bg-red-400 font-bold text-center mb-5" id="fbox">Frontend</h2>
            {frontendData.map((item, index) => (
              <div key={index} className="progress-item mb-4">
                <p className=" font-semibold">{item.name} : {item.value}%</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: `${item.value}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div className="flex-1 w-[40vw]" id="backend">
            <h2 className="text-xl bg-red-400 font-bold text-center mb-5" id="bbox">Backend</h2>
            {backendData.map((item, index) => (
              <div key={index} className="progress-item mb-4">
                <p className=" font-semibold">{item.name} : {item.value}%</p>
                <div className="progress-bar" id="">
                  <div className="progress" id="" style={{ width: `${item.value}%` }} />
                </div>
              </div>
            ))}
          </div>
      </div>
    </>
  );
};

export default Skills;
