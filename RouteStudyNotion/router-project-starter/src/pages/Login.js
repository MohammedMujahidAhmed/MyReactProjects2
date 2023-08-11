import React from 'react'
import Templete from '../components/Templete'
import LoginImg from '../assets/login.png'

export const Login = ({setLoggedIn}) => {
    const content = {
        heading : "Welcome Back",
        desc1 : "Build skills for today,tommorow and beyond",
        desc2 : "Education to future proof career",
        path : LoginImg,
        formType: 'login'
    };

    return (
    <Templete content={content} setLoggedIn={setLoggedIn}/>
  )
}

export default Login;