import React from 'react'
import {FaShoppingCart} from "react-icons/fa";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    const totalCartItems = useSelector((state)=>state.cart.itemCount);
    const imgSourse = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fshopping-logo&psig=AOvVaw0CxEgaQgLnllWweeDCQTIL&ust=1691397194473000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJjp9t3Px4ADFQAAAAAdAAAAABAL';
    const imgs = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngegg.com%2Fen%2Fsearch%3Fq%3Dshopping%2BLogo%2BDesign&psig=AOvVaw3vHBcpAy4lzixJdI6IJayk&ust=1691427199737000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNDr2L2_yIADFQAAAAAdAAAAABAE';
    return (
    <nav className='flex flex-row justify-between w-11/12 max-w-[1000px] m-auto p-3 bg-cyan-950'>
        <Link to='/'>
            <img src={imgs} alt="logo"/>
        </Link>
        <div className='flex space-x-2 items-center'>
            <Link to="/"> 
               <p className='font-medium text-white hover:font-semibold'>Home</p>
            </Link>
            <Link to='/cart' className='relative'>
                {
                    totalCartItems > 0 ?
                    <div className='absolute animate-bounce rounded-full w-[9px] h-[9px] bg-green-500 -top-1/4 -right-1 text-[8px] text-center font-bold '>{totalCartItems}</div>:""
                }
                <FaShoppingCart className='text-white hover:text-green-500'/>
            </Link>
        </div>
    </nav>
  )
}
