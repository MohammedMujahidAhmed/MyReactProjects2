// import axios from 'axios';
import React from 'react'
import { Spinner } from './Spinner';
import useGif from '../hooks/useGif';

export const RandomGifs = () => {

    const [gif,runningFetch,fetchData] = useGif();
    return (
    <div className='w-1/2 bg-green-500 flex flex-col items-center rounded-md border-2 border-slate-400'>
        <h2 className='font-medium underline '>A RANDOM GIF</h2>
        {   runningFetch === false ?
            <img src={gif} alt='gif' width="450" loading='lazy'/>:<Spinner/>
        }
        <button 
            onClick={fetchData}
            className='bg-white p-2 font-medium  w-11/12 rounded-md m-2'>
            GENERATE
        </button>
    </div>
  )
}
