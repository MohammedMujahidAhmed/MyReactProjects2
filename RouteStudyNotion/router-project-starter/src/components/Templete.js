import React from 'react'
// import { Link } from 'react-router-dom'
import Frame from '../assets/frame.png'
import { LoginForm } from './LoginForm'
import { SignUpForm } from './SignUpForm'
import {FcGoogle} from 'react-icons/fc';
export const Templete = ({content,setLoggedIn}) => {
  return (
    <div className='flex justify-between w-11/12 max-w-[1160px] mx-auto py-12 gap-x-12 gap-y-0 '>
        <div className='w-11/12 max-w-[450px] mx-0'>
            <h2 className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]'>{content.heading}</h2>
            <p className='text-[1.125rem] leading-[1.625rem] mt-4'> 
                <span className='text-richblack-100'>{content.desc1}</span>
                <br/>
                <span className='text-blue-100 italic'>{content.desc2}</span>
            </p>
            <p></p>
            {
                content.formType === 'login'?(<LoginForm setLoggedIn={setLoggedIn}/>):(<SignUpForm setLoggedIn={setLoggedIn}/>)
            }
            <div className='flex w-full items-center my-4 gap-x-2 '>
                <div className='w-full h-[1px] bg-richblack-700'></div>
                <div className='text-richblack-700 font-medium leading-[1.375rem] '>OR</div> 
                <div className='w-full h-[1px] bg-richblack-700'></div>
            </div>
            <button  className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100 border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6'>
                <FcGoogle/>
                <p>sign in with google</p>        
            </button>
        </div>

        <div className='relative w-11/12 max-w-[450px]'>
            <img src ={Frame} width={558} height= {504} alt='Frame' loading='lazy'/>
            <img src={content.path}   width={558} height= {490} className='absolute -top-4 right-4' alt='School Girl' loading='lazy'/>
        </div>
        

    </div>
  )
}

export default Templete;