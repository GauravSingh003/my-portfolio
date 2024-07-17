import { MdOutlineBrightnessHigh } from "react-icons/md";
import '../../App.css'

const Bright = () => {
  const btn = document.querySelector("#btnmode");
  const body = document.querySelector("body");
  let currmode = "dark_mode";

  const click = (e) => {
    if(currmode === "dark_mode"){
      currmode = "light_mode";
      body.classList.add("light_mode");
      body.classList.remove("dark_mode");
    }
    else{
      currmode = "dark_mode";
      body.classList.add("dark_mode");
      body.classList.remove("light_mode");
    }
    console.log(currmode);
  }
    

  return (
    <>
    <button className="text-2xl" onClick={click} id="btnmode"><MdOutlineBrightnessHigh/></button>
    </>
  )
}

export default Bright;