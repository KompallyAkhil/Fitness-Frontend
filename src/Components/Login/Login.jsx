import React, { useEffect, useState } from "react";
import bgimage from "./login.avif";
import GoogleButton from 'react-google-button'
import {auth,provider} from "../Config/Config.js"
import {signInWithPopup} from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate()
    const [email,setEmail] = useState('');
    const signWithGoogle = () => {
        signInWithPopup(auth,provider).then((data)=>{
            setEmail(data.user.email);
            localStorage.setItem("email",data.user.email);
            navigate('/Fit');
        })
    }
    useEffect(()=>{
        const storedEmail = setEmail(localStorage.getItem('email'))
        if (storedEmail) {
            navigate('/Fit');
        }
    },[navigate]) 
    return(
        <>
        <GoogleButton onClick={signWithGoogle} />
        <img className="login-img" src={bgimage} />
        </>
    )
}
export default Login;
