import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {AiOutlineEye , AiOutlineEyeInvisible} from "react-icons/ai"
import { toast } from 'react-hot-toast';


export const LoginForm = ({setLoggedIn}) => {
    const navigate = useNavigate();
    const [FormData,setFormData] = useState(
        {
            EmailAdd:"",
            Password:"",
        }
    );

    function changeHandler(event){
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]:event.target.value
        }))
    } 

    function OnsubmitForm(event){
        event.preventDefault();
        setLoggedIn(true);
        toast.success("Loggined In");
        console.log(FormData);
        navigate("/DashBoard");
    }

    const [showPassword,setShowPassword] = useState(false);
  return(
        <form onSubmit={OnsubmitForm} className='flex flex-col w-full gap-y-4 mt-6'>
            <label className='w-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                    Email Address <sup className='text-pink-200'>*</sup>
                </p>
                <input
                    required
                    type="email"
                    name="EmailAdd"
                    id="EmailAdd"
                    placeholder="Enter email address"
                    value={FormData.EmailAdd}
                    onChange={changeHandler}
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                ></input>
            </label>
            <label className='w-full relative'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                    Password <sup className='text-pink-200'>*</sup>
                </p>
                <input
                required
                type={showPassword?"text":"password"}
                name="Password"
                id="Password"
                placeholder="Enter password"
                value={FormData.Password}
                onChange={changeHandler}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    ></input>
                <span 
                    className='absolute right-3 top-[38px] curser-pointer'
                    onClick={()=>{setShowPassword((prev)=>(!prev))}}>
                    {showPassword?
                        (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />):
                        (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)
                    }
                </span>
                <Link to="#">
                    <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>
                        Forget Password
                    </p>
                </Link>
            </label>
            <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px]'>
                Sign In
            </button>
        </form>
  )
}
