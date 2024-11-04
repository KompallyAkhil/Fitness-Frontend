import React, { useEffect, useState } from "react";
import axios from "axios";
import GoogleButton from 'react-google-button'
import { auth, provider } from "../Config/Config.js"
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./Login.css"
const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [loginDetails,setLoginDetails] = useState({
        Username : "",
        Password : ""
    })
    const [signUp,setSignup] = useState({
        Username : "",
        EmailID : "",
        Password : "",
        ConfirmPassword : ""
    })
    const [status,setStatus] = useState(false);
    const [showlogin, setShowLogin] = useState(true);
    const [showSignIn, setSignIn] = useState(false)
    const signWithGoogle = () => {
        signInWithPopup(auth, provider).then((data) => {
            setEmail(data.user.displayName.toLocaleUpperCase());
            localStorage.setItem("Username", data.user.displayName.toLocaleUpperCase());
            navigate('/Fit');
        })
    }
    useEffect(() => {
        const storedEmail = setEmail(localStorage.getItem('Username'))
        if (storedEmail) {
            navigate('/Fit');
        }
    }, [navigate])
    const showLogin = () => {
        setShowLogin(true);
        setSignIn(false);
    }
    const showSignUp = () => {
        setShowLogin(false);
        setSignIn(true);
    }
    const changeLoginDetails = e => {
        setLoginDetails({...loginDetails ,[e.target.name] : e.target.value});
    }
    const changeRegisterDetails = e => {
        setSignup({...signUp,[e.target.name]:e.target.value});
    }
    const LoginUser = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:8000/SignIn`,loginDetails);
            console.log(response.data)
            setStatus(response.data.loginStatus);
            if (response.data.loginStatus) { 
                localStorage.setItem("Username", loginDetails.Username);
                navigate('/Fit');
            }
        } catch (error) {
            if(error.response){
                console.log("Error Occurred " + error.response.data.message);
            }
        }
    }
    const RegisterData = async (e) =>{
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:8000/Register`,signUp)
            setSignup({
                Username: "",
                EmailID: "",
                Password: "",
                ConfirmPassword: ""
            });
            console.log(response.data)
        } catch (error) {
            if(error.response){
                console.log("Error Occurred " + error.response.data.message);
            }
        }
    }
    const EnterButton = e =>{
        if(e.key === "Enter"){
            LoginUser()
        }
    }
    return (
        <>
            <div className="container">
                <div className="container-heading">
                    <h1 onClick={showLogin} >Login In</h1>
                    <h1 onClick={showSignUp} >Sign Up</h1>
                </div>
                <form className="login-container" style={{ display: showlogin ? "block" : "none" }}>
                    <label>Username : </label>
                    <input type="text" value={loginDetails.Username} onKeyDown={EnterButton} name="Username" onChange={changeLoginDetails} autoFocus />
                    <label>Password : </label>
                    <input type="password" value={loginDetails.Password} name="Password" onChange={changeLoginDetails} />
                    <div className="bottom-container">
                        <button className="login-btn" onClick={LoginUser}>Login</button>
                        <p>Or</p>
                        <div className="center-google">
                            <GoogleButton onClick={signWithGoogle} />
                        </div>
                    </div>
                </form>
                <form className="signup-container" style={{ display: showSignIn ? "block" : "none" }}>
                    <label>Username :</label>
                    <input autoFocus value={signUp.Username} name="Username" type="text"  onChange={changeRegisterDetails}/>
                    <label>Email :</label>
                    <input type="email" value={signUp.EmailID} name="EmailID" onChange={changeRegisterDetails} />
                    <label>Password : </label>
                    <input type="password" value={signUp.Password} name="Password" onChange={changeRegisterDetails}/>
                    <label>Confirm Password :</label>
                    <input type="password" value={signUp.ConfirmPassword} name="ConfirmPassword" onChange={changeRegisterDetails}/>
                    <button className="register-btn"  onClick={RegisterData} >Register</button>
                </form>
            </div>
        </>
    )
}
export default Login;
