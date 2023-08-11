import React, { useState } from "react";
import { toast } from "react-hot-toast";
import {AiOutlineEye , AiOutlineEyeInvisible} from "react-icons/ai"
import { useNavigate } from "react-router-dom";

export const SignUpForm = (props) => {
    const navigate = useNavigate();
    let setLoggedIn = props.setLoggedIn;
    const [FormData,setFormData] = useState(
        {
            FirstName:"",
            LastName:"",
            EmailAdd:"",
            Password:"",
            confirmPassword:"",
        }
    );
    
    const[AccountType,setAccountType] =useState("Student");
    const [showPassword1,setShowPassword1] = useState(false);
    const [showPassword2,setShowPassword2] = useState(false);


    function changeHandler(event){
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]:event.target.value
        }))
    }    

    function OnsubmitForm(event){
        event.preventDefault();
        if(FormData.Password !== FormData.confirmPassword){
            toast.error("Password do not match");
            return;
        }
        setLoggedIn(true);
        toast.success("Signed In Sucess");
        const accountdata = {
          ...FormData,
          AccountType
        }
        console.log(accountdata);
        navigate("/DashBoard");
    }

    return (
    <div>
        <div className="flex bg-richblack-800 gap-x-1 my-6 rounded-full w-fit p-1">
          <button
            className={`${AccountType === "Student" ? 
            "bg-richblack-900 text-richblack-5":
            " bg-transparent text-richblack-200"} 
            py-2 px-5 rounded-full transition-all duration-200`} 
            
            onClick={()=>{setAccountType("Student")}}>
              Student
          </button>
          <button 
            className={`${AccountType === "Instructor" ? 
            "bg-richblack-900 text-richblack-5":
            " bg-transparent text-richblack-200"} 
            py-2 px-5 rounded-full transition-all duration-200`}
            onClick={()=>{setAccountType("Instructor")}}>
            Instructor
          </button>
        </div>
      <form onSubmit={OnsubmitForm} className='flex flex-col w-full gap-y-4 mt-6'>
        <div className=" flex justify-between gap-x-3">
          <label className='w-1/2'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
              First Name <sup className='text-pink-200'>*</sup>
            </p>
            <input
                required
              type="text"
              name="FirstName"
              id="FirstName"
              onChange={changeHandler}
              placeholder="Enter first name"
              value={FormData.FirstName}
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            ></input>
          </label>

          <label className='w-1/2'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
              Last Name <sup className='text-pink-200'>*</sup>
            </p>
            <input
                required
              type="text"
              name="LastName"
              id="LastName"
              onChange={changeHandler}
              placeholder="Enter last name"
              value={FormData.LastName}
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            ></input>
          </label>
        </div>

        <label className='w-full '>
          <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
            Email Address <sup className='text-pink-200'>*</sup>
          </p>
          <input
            required
            type="email"
            name="EmailAdd"
            id="EmailAdd"
            placeholder="Enter email address"
            onChange={changeHandler}
            value={FormData.EmailAdd}
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
          ></input>
        </label>
        <div className=" flex justify-between gap-x-3">
          <label className='w-1/2 relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
              Create Password <sup className='text-pink-200'>*</sup>
            </p>
            <input
                required
              type={showPassword1?"text":"password"}
              name="Password"
              id="Password"
              placeholder="Enter password"
              value={FormData.Password}
              onChange={changeHandler}
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            ></input>
            <span
              className='absolute right-3 top-[38px] curser-pointer' 
              onClick={()=>{setShowPassword1((prev)=>(!prev))}}>
                {showPassword1?
                  (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>):
                  (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)
                }
            </span>
          </label>
          <label className='w-1/2 relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
              Confirm Password <sup className='text-pink-200'>*</sup>
            </p>
            <input
                required
              type={showPassword2?"text":"password"}
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Enter password"
             value={FormData.confirmPassword}
             onChange={changeHandler}
             className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            ></input>
            <span 
              className='absolute right-3 top-[38px] curser-pointer'
              onClick={()=>{setShowPassword2((prev)=>(!prev))}}>
                {showPassword2?
                  (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>):
                  (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)
                }
            </span>
          </label>
        </div>
        <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px]'>
          Create Account
        </button>
      </form>
    </div>
  );
};
