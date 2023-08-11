import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import DashBoard from "./pages/DashBoard";
import PrivateRoute from "./components/PrivateRoute";
function App() {

  const [isLoggedIn,setLoggedIn] = useState(false);

  return(
    //have added min-h-screen may cause problem in future with styling do check
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col">
        <Navbar isLoggedIn = {isLoggedIn} setLoggedIn = {setLoggedIn}/>

        <Routes>
          <Route path="/" element = {<Home/>}></Route>
          <Route path="/Login" element = {<Login setLoggedIn={setLoggedIn}/>}></Route>
          <Route path="/SignUp" element = {<SignUp setLoggedIn={setLoggedIn}/>}></Route>
          <Route path="/DashBoard" element = {
              <PrivateRoute isLoggedIn={isLoggedIn}>
                <DashBoard/>
              </PrivateRoute>
            }
          >
          </Route>
        </Routes>

    </div>    
  )
}

export default App;
