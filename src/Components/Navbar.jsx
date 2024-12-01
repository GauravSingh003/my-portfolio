import { HashLink as Link } from "react-router-hash-link";
import { TiThMenu } from "react-icons/ti";
// import { RiMenuFold4Line } from "react-icons/ri";
import Bright from "./Nav/Bright";
import { useState } from "react";
import '../CSS/navbar.css';

const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <>
      <div className="flex justify-between w-full bg-purple-500 py-2 px-5" id="nav_main">
        <div className="flex gap-6 items-center justify-end">
          <Bright className="absolute ml-10" />
        </div>

        <div id="nav-par">
          <ul id="nav"
            className={`nav-container gap-7 ${isMenuVisible ? "show-nav" : "hide-nav"}`}>
            <Link to="#home" smooth>Home</Link>
            <Link to="#skills" smooth>Skills</Link>
            <Link to="#certificates" smooth>Certificates</Link>
            <Link to="#projects" smooth>Projects</Link>
            <Link to="#chat" smooth>Contact Me</Link>
          </ul>
        </div>

        <div className="text-3xl menu-icon w-10 relative" id="menu">
          <TiThMenu onClick={handleMenuToggle} />
        </div>

      </div>
    </>
  );
};

export default Navbar;
