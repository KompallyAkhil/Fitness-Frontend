import React, { useEffect, useState } from "react";
import bgimage from "./login.avif";
import video from "./video3.mp4"
import GoogleButton from 'react-google-button'
import {auth,provider} from "../Config/Config.js"
import {signInWithPopup} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./Login.css"
const Login = () => {
    const navigate = useNavigate()
    const [email,setEmail] = useState('');
    const [showlogin,setShowLogin] = useState(true);
    const [showSignIn,setSignIn] = useState(false)
    const signWithGoogle = () => {
        signInWithPopup(auth,provider).then((data)=>{
            console.log(data)
            setEmail(data.user.displayName.toLocaleUpperCase());
            localStorage.setItem("Username",data.user.displayName.toLocaleUpperCase());
            navigate('/Fit');
        })
    }
    useEffect(()=>{
        const storedEmail = setEmail(localStorage.getItem('email'))
        if (storedEmail) {
            navigate('/Fit');
        }
    },[navigate]) 
    const showLogin = () => {
        setShowLogin(true);
        setSignIn(false);
    }
    const showSignUp = () => {
        setShowLogin(false);
        setSignIn(true);
    }
    return(
        <>
        <div className="container">
            <div className="container-heading">
                <h1 onClick={showLogin} >Login In</h1>
                <h1 onClick={showSignUp} >Sign Up</h1>
            </div>
            <form className="login-container" style={{display: showlogin ? "block" : "none"}}>
               
                    <label>Username</label>
                    <input autoFocus/>
                    <label>Password</label>
                    <input/>
                    <button>Login</button>
                    <GoogleButton onClick={signWithGoogle} />
           
            </form>
            <form className="signup-container" style={{display : showSignIn ? "block" : "none"}}>
                <label>First Name</label>
                <input/>
                <label>Email</label>
                <input/>
            </form>
          
        </div>
        </>
    )
}
export default Login;
