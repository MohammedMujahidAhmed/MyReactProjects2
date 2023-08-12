import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddToCart , removeFromCart} from '../Redux/Slices/CartSlice';
import { toast } from 'react-hot-toast';

const Product = ({item}) => {
    const dispatch = useDispatch();
    const itemsInCart = useSelector((state)=>state.cart.inCart);
    const [itemFound,setItemFound] = useState(false);

    function addToCart(){
        dispatch(AddToCart(item));
        toast.success('Item added to cart');
    }

    function RemoveItemCart(){
      dispatch(removeFromCart(item));
      toast.error('Item removed');
  }
    
  function checkIt(iteminCart){
    return iteminCart.id === item.id;
  }
  return (
    <div className='flex flex-col items-center justify-between h-full border rounded-[10px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:hover:scale-x-125 md:hover:scale-y-110'>
        <p className='text-center font-semibold my-3 text-sm'>{item.title.slice(0,17)}...</p>
        <p className='text-center h-[40px] w-[80%] text-[12px] font-thin overflow-hidden'>{item.description}</p>
        <div className='w-[50%] m-5'>
          <img src={item.image} alt='itemImage' />
        </div>
        <div className='flex flex-row justify-between w-full p-3 '>
            <p className='text-green-500 font-semibold'>&#8377;{item.price}</p>
            {
              itemsInCart.find(checkIt)?
              <button onClick={RemoveItemCart} className='text-[12px] uppercase border rounded-2xl px-2 border-black hover:bg-slate-700 hover:text-white'>Remove Item</button>
              :<button onClick={addToCart} className='text-[12px] uppercase border rounded-2xl px-2 border-black hover:bg-slate-700 hover:text-white'>Add To Cart</button>
            }
        </div>
    </div>
  )
}

export default Product;
