import React, { useEffect, useState } from 'react'
import { Spinner } from '../Components/Spinner';
import Product from '../Components/Product';

const HomePage = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [items,setItems] = useState([]);
  const [loading,setLoading] = useState(false);

  async function fetchData(){
    setLoading(true);
    try {
        const output = await fetch(API_URL);
        const output2 = await output.json();
        setItems(output2);
        console.log(items);
        console.log('done');
    } catch (error) {
        console.log('problem fetching data');
        setItems([]);
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div className='w-11/12 max-w-[1000px] m-auto my-10'>
      {
        loading ? <Spinner /> :
        items.length > 0 ?
        (<div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
          {
            items.map((item) => (
              <Product key={item.id} item={item}/>
            ))
          }
        </div>):
        <div>
          <p>No data found</p>
        </div> 
      }
    </div>
  )
}

export default HomePage;