import React from 'react'
import { useNavigate } from 'react-router-dom'
const TopTrendingTag = () => {
    let navigate = useNavigate()
    let topTag = ["#Programming", "#MachineLearning", "#TechNews", "#Innovation"]
  return (
    <div className='md:w-[25%] hidden md:visible md:h-[100dvh] h-[100%] sticky   pl-[3%]  border-gray-300 border-l-2 p-4 md:flex pt-[2%]  top-0 left-0  md:flex-col gap-[4%]  '>
    <h1 className='font-bold text-2xl text-start'> TopTrendingTag</h1>
        <div  className="flex flex-col gap-2 ">
            {topTag.map((tag,index)=>{
                return <button key={index} onClick={()=>navigate(`/tag/${tag.replace("#","")}`)}  className="text-blue-500 hover:underline cursor-pointer flex justify-self-start text-lg text-left md:pb-[5%] py-[5%]">
                    {tag}
                </button>
            })}
        </div>
       </div>
  )
}

export default TopTrendingTag