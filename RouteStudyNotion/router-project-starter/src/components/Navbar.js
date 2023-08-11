import React   from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import toast from "react-hot-toast";

const Navbar = (props) => {
    let isLoggedin = props.isLoggedIn;
    let setLoggedin = props.setLoggedIn; 
    return (
        <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
            <Link to="/">
                <img src={Logo} width={160} height={32} loading="lazy" alt="logo"/>
            </Link>
            <nav>
                <ul className="text-richblack-100 flex gap-x-6">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="#">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="#">About Us</Link>
                    </li>
                </ul>
            </nav>

            <ul className="flex items-center gap-x-4">
                { !isLoggedin &&
                    <li>
                        <Link to="Login">
                            <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Login</button>
                        </Link>
                    </li>
                }
                {
                    isLoggedin &&
                    <li>
                        <Link to="/">
                            <button onClick={()=>{
                                setLoggedin(false);
                                toast.success("Logged out");
                            }} className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">LogOut</button>
                        </Link>
                    </li>
                }
                {
                    isLoggedin &&
                    <li>
                        <Link to="/DashBoard">
                            <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">DashBoard</button>
                        </Link>
                    </li>
                }
                {
                    !isLoggedin &&
                    <li>
                        <Link to="/SignUp">
                            <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">SignUp</button>
                        </Link>
                    </li>
                }
            </ul>
        </div>
    )
}

export default Navbar