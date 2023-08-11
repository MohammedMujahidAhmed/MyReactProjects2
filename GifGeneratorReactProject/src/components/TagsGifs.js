import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { Spinner } from './Spinner';
import useGif from '../hooks/useGif';

export const TagsGifs = () => {
    const [tag,setTag] = useState('bike');

    const [gif , runningFetch , fetchData] = useGif(tag);

  return (
    <div className='w-1/2 bg-blue-500 flex flex-col items-center rounded-md border-2 border-slate-400'>
        <h2 className='font-medium underline '>RANDOM {tag} GIF</h2>
        {   runningFetch === false ?
            <img src={gif} alt='gif' width="450" loading='lazy'/>:<Spinner/>
        }
        <input 
            type='text'
            className='bg-white p-2 font-medium  w-11/12 rounded-md m-2 text-center'
            onChange={(event)=>{setTag(event.target.value)}}
            value={tag}
        >
        </input>
        <button 
            onClick={()=>fetchData(tag)}
            className='bg-white p-2 font-medium  w-11/12 rounded-md m-2'>
            GENERATE
        </button>
    </div>
  )
}
