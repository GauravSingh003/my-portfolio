import Menu from "./Nav/Menu";
import {HashLink as Link } from "react-router-hash-link";
import Bright from "./Nav/Bright";
const Navbar = () => {
  return (
    <>
      <div
        className="p-5 text-green-400 flex justify-between items-center"
        id="nav"
      >
        <Menu />
        <ul className="flex gap-8">
            <Link to="#home" smooth> Home </Link>
            <Link to="#skills" smooth> Skills </Link>
            <Link to="#certificates" smooth>Certificates</Link>
            <Link to="#projects" smooth> Projects </Link>
            <Link to="#chat" smooth> contact me </Link>
        </ul>
        <div className="flex gap-6">
          <Bright />
        </div>
      </div>
    </>
  );
};

export default Navbar;
