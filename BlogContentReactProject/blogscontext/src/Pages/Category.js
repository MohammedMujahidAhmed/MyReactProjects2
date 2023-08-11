import React, { useContext } from 'react'
import { Header } from '../Components/Header'
import { Pagination } from '../Components/Pagination'
import { AppContext } from '../Context/AppContext'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Blogs } from '../Components/Blogs'

export const Category = () => {
    const location = useLocation();
    const navigation = useNavigate();
  return (
    <div className='flex flex-col justify-center items-center h-screen overflow-hidden relative'>
        <Header/>
        <div className='overflow-scroll no-scrollbar w-9/12 max-w-[1100px] mt-[60px] mb-[60px] '>
            <div className='flex items-center justify-between'>
                <div className='flex  space-x-2 items-center'>
                    <button onClick={()=>navigation(-1)} to='/' className='border p-1 rounded-md font-medium px-2' >Back</button>
                    <p> <span className='text-xl font-bold'>Blogs On</span> <span className='text-xl underline font-bold'>{location.pathname.split('/').at(-1).replaceAll('-',' ')}</span> </p> 
                </div>
                <Link to='/' className='border p-1 rounded-md font-medium px-2' >Home</Link>
            </div>
            <Blogs/>
        </div>
        <Pagination/>
    </div>
  )
}
