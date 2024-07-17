import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { TbBrandWhatsapp } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { TbPointFilled } from "react-icons/tb";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Hleft = () => {
  return (
    <>
    <div className="flex" id="fmain">
      <div className="text-center p-4" id="main">
        <header className="flex justify-center text-xl font-semibold">
          Cracking the Dev of Software <span className="text-orange-400 relative top-2"><TbPointFilled /></span>
        </header>
        <h2 className="mt-2 mb-2">
        <h1 className="text-2xl font-semibold">Hello, This is <span className="font-bold text-orange-500">GAURAV SINGH</span></h1>

          <span className="text-green-400 text-2xl auto-type">
          <h1 style={{ paddingTop: '2rem', margin: 'auto 0', fontWeight: 'normal' }}>
         <span className="text-white">I AM A</span> {' '}
        <span className="text-green font-bold">
          <Typewriter
            words={['Web-Developer', 'Full-Stack Developer', 'MERN-Stack Developer']}
            loop={true}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
          </span>
        </h2>


        <p className="text-xl font-mono">
         As a Developer, i am on a mission to craft immersive digital experiances that blend functionally with
         a versatile or advanced toolkits like: reactJs, MongoDB, Three.js, TailwindCSS from crafting robust backends
        to crafting pixel-perfect frontends...
        </p>
        <div className="p-4 text-center" id="down">
          <p className="text-xl">
            Unlocking the theme of Web-Developement, <span className="text-green-400 cursor-pointer">
            Let's Connect</span>
          </p>
          <div id="micon" className=" text-green-400 cursor-pointer text-2xl flex gap-10">
            <FaXTwitter id="social"/>
            <FaLinkedin  id="social"/>
            <FaGithub  id="social"/>
            <TbBrandWhatsapp  id="social"/>
          </div>
        </div>
        <div className="flex justify-center  gap-10 font-serif font-semibold">
            <p className="bg-green-400 border-2 border-green-300 rounded-2xl flex gap-2  p-2" id="eye"><FaEye className="relative top-1" />Projects</p>
            <p className="bg-green-400 border-2 border-green-300 rounded-2xl flex gap-2 p-2" id="eye"><FaEye  className="relative top-1"/>Resume</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Hleft;
