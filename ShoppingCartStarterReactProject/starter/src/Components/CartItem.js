import React from 'react';
import {RiDeleteBin6Line} from 'react-icons/ri';
import { removeFromCart } from '../Redux/Slices/CartSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';

const CartItem = ({item}) => {
    const dispatch = useDispatch();
    function removeCartItem(){
        dispatch(removeFromCart(item));
        toast.error('Item removed');
    }
  return (
    <div className='border-b border-black m-4 flex flex-row w-full p-3 lg:min-h-[190px] md:min-h-[120px] sm:min-h-[80px]'>
        <div className='flex items-center p-2 w-[70%]'>
            <img src={item.image} alt='itemImage'></img>
        </div>
        <div className='flex flex-col justify-between'>
            <p className='text-md font-bold'>{item.title}</p>
            <p>{item.description.slice(0,81)}...</p>
            <div className='flex flex-row justify-between'>
                <p className='font-bold text-green-600'>${item.price.toFixed(2)}</p>
                <div className="rounded-full p-2 bg-red-500 cursor-pointer" onClick={removeCartItem}>
                    <RiDeleteBin6Line/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItem;