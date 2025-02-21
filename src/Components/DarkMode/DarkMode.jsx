import React, { useEffect, useState } from "react";
import SunIcon from "../../Components/DarkMode/Sun.svg";
import MoonIcon from "../../Components/DarkMode/Moon.svg";
import "../../Components/DarkMode/DarkMode.css";

const DarkMode = () => {
    const [islight, setlight] = useState(false)

    useEffect(()=>{
     if (islight) {
        document.body.classList.add("light")
     }else{
        document.body.classList.remove("light")
     }
    },[islight])

    function toogleDark(){
        setlight((prevmode)=> !prevmode)
    }
    return (
        <div className='dark_mode visible'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toogleDark}
                checked={islight}
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
            {/* <img src={SunIcon} alt="Sun Icon" />
            <img src={MoonIcon} alt="Moon Icon" /> */}
            </label>
        </div>
    );
};

export default DarkMode;
