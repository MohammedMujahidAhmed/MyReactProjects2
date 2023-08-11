import React from 'react'
import Templete from '../components/Templete';
import signUpImg from '../assets/signup.png';

export const SignUp = ({setLoggedIn}) => {
    const content = {
        heading : "Join the millions learning to code with StudyNotion for free",
        desc1 : "Build skills for today,tommorow and beyond",
        desc2 : "Education to future proof career",
        path : signUpImg,
        formType: 'signup'
    };

    return (
    <Templete content={content} setLoggedIn={setLoggedIn}/>
  )
}

export default SignUp;