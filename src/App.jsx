import React from 'react'
import PostProvider from "../src/Context/PostContext"
import PostList from  "../src/Components/PostList"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MenuDrawer from './Screens/MenuDrawer';
import TopTrendingTag from './Screens/TopTrendingTag';
import DarkMode from './Components/DarkMode/DarkMode';
const App = () => {
  return (
    <div className='md:flex'>
    <MenuDrawer/>
    <PostProvider>
      <div className=" my-auto pt-[3%]  md:w-[50%]">
        <h1 className="text-xl font-bold mb-4 text-center">Social Media Feed</h1>
        <Routes>
        <Route path="/" element={<Navigate to="/page/1" />} />
        <Route path="/page/:page" element={<PostList />} />
        <Route path="/tag/:tag" element={<PostList />} />
      </Routes>
      </div>
    </PostProvider>
    <TopTrendingTag/>
    </div>
  )
}

export default App