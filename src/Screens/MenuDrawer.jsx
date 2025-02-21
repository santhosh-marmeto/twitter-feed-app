import React, { useEffect, useState } from 'react'
import menuDrawer from "./MenuDrawerData"
import {useNavigate} from "react-router-dom"
import DarkMode from '../Components/DarkMode/DarkMode';
const MenuDrawer = () => {
    let navigate = useNavigate();

    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        setIsDark(document.body.classList.contains("dark"));
    }, []);

  return (
    <div className='md:w-[25%]  md:h-[100dvh] h-[100%] md:sticky  pl-[3%]  border-gray-300 border-r-2 p-4 md:flex pt-[2%]  top-0 left-0  md:flex-col gap-[4%]  '>
        <div className='flex md:justify-around justify-center gap-0.5 md:gap-0'>
        <div className='w-[40px] h-[40px] cursor-pointer 'onClick={() => navigate("/page/1", { replace: true })}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" stroke='#1DA1F2'></path></g></svg>
            </div>
          <div className=''>
           <DarkMode/>
          </div>
        </div>
        
        <div className='hidden md:flex flex-col'>
            {menuDrawer.map((item,index) => (
                <div key={item.id} className={`flex  items-center mb-[5%]  rounded-[12px]  space-x-2  cursor-pointer ${
                    index === 0 && "text-blue-500 hover:text-blue-500" 
                }`}>
                    {item.menuSvg && item.menuSvg(isDark ? "white" : index === 0 ? "#1DA1F2" : "black")}
                    <span className='text-lg font-semibold  hover:text-blue-500  p-[10px]   rounded-[12px] '>{item.menuTitle}</span>
                    <div className='w-auto relative left-[-31px]'>
                  {item.imageUrl &&
                    <img 
                    src={item.imageUrl} 
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover"
                  />
                  
                     }
                </div>
                </div>
              
                 
               
            ))}
        </div>
    </div>
  )
}

export default MenuDrawer
