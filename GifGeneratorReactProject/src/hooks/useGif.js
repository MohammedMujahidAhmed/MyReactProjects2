import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url =`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {

    const [gif,setGif] = useState('');
    const [runningFetch,setRunningFetch] = useState(false);

    async function fetchData(tag){
        setRunningFetch(true);
        const {data} = await axios.get(tag ? `${url}&tag=${tag}` : url);
        const imageSrc = data.data.images.downsized.url;
        setGif(imageSrc);
        setRunningFetch(false);
    }

    useEffect(()=>{
        fetchData('bike');
    },[])

    return [gif,runningFetch,fetchData];
}

export default useGif;