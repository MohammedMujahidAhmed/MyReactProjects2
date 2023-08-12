import React from 'react'
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import CartItem from '../Components/CartItem';

const CartPage = () => {
  const totalItem = useSelector((state) => state.cart.itemCount );
  const totalAmount = useSelector((state) => state.cart.totalAmount );
  const cartItems = useSelector((state)=> state.cart.inCart); 
  let height = window.innerHeight-40;
  console.log(cartItems)
  return (
    <div className='w-11/12 max-w-[1000px] m-auto my-10 relative'>
      {
        totalItem > 0 ? 
        (
          <div className=''>
            <div className='sm:mt-[20px] flex sm:flex-col flex-row  justify-between sm:h-[300px] sm:w-[35%] w-full sm:m-1  sm:fixed sm:right-12 sm:top-20'>
              <div className='flex flex-col sm:block'>
                <p className='text-xl text-green-600'>Your Cart</p>
                <p className='uppercase text-3xl font-bold text-green-700'>summary</p>
                <p className='py-3 font-semibold text-gray-800'>Total Items: <span className='text-black font-bold'> {totalItem}</span> </p>
              </div>
              <div className='flex flex-col sm:block'>
                <p className='py-3 font-semibold text-gray-800'>Total Amount:<span className='text-black font-bold' > ${totalAmount.toFixed(2)}</span> </p>
                <button className='rounded-[12px] bg-green-600 p-2 sm:w-full  text-white text-sm sm:font-semibold'>Check Out Now</button>
              </div>
            </div>
            <div className='sm:w-[50%] w-full flex flex-col'>
              {
                cartItems.map((item,index) => (
                  <CartItem key={index} item={item}/>
                ))
              } 
            </div>
          </div>
        ):
        (
          <div className='w-full'>
            <div className='flex flex-col items-center justify-center h-screen'>  
              <div>Your Cart is Empty! </div>
              <Link to='/' className='bg-green-700 text-white font-semibold p-2 rounded-[12px]'>Shop Now</Link>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default CartPage;