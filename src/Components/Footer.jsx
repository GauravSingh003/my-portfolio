import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { TbBrandWhatsapp } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="bg-gray-400 p-8 bottom-0 " id="fmain">
        <div className="flex gap-3 justify-end mr-3 mt-3">
          <p className="relative bottom-1.5">Contact Me:-</p>
          <FaXTwitter />
          <FaLinkedin />
          <FaGithub />
          <TbBrandWhatsapp />
        </div>
        <div className="text-center">
            <h2 className="text-2xl font-bold font-serif">Gaurav Singh</h2>
            <p>Developed and Designed by <span className="text-green-400 font-mono font-semibold">Gaurav Singh</span>, <br />
            $copy copyright 2024. All right reserved.</p>
        </div>
        <div id="flink" className=" text-blue-700">
            <a href="">Privacy</a>
            <a href="">Legal Rights</a>
            <a href="">Notice</a>
        </div>
      </div>
    </>
  );
};

export default Footer;
