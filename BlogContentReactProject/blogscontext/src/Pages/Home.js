import React from 'react'
import { Header } from "../Components/Header";
import { Blogs } from "../Components/Blogs";
import { Pagination } from "../Components/Pagination";
import { useNavigate } from 'react-router-dom';

export const Home = () => {
    const navigation = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center h-screen overflow-hidden relative">
        <Header/>
        <div className='mt-[45px] mb-[60px] w-full flex justify-center overflow-scroll overflow-x-hidden no-scrollbar' >
            <Blogs/>
        </div>
        <Pagination/>
    </div>
  )
}
