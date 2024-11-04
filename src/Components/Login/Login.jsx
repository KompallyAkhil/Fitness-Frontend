import React, { useEffect, useState } from "react";
import bgimage from "./login.avif";
import video from "./video3.mp4"
import GoogleButton from 'react-google-button'
import { auth, provider } from "../Config/Config.js"
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./Login.css"
const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [showlogin, setShowLogin] = useState(true);
    const [showSignIn, setSignIn] = useState(false)
    const signWithGoogle = () => {
        signInWithPopup(auth, provider).then((data) => {
            console.log(data)
            setEmail(data.user.displayName.toLocaleUpperCase());
            localStorage.setItem("Username", data.user);
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
    return (
        <>
            <div className="container">
                <div className="container-heading">
                    <h1 onClick={showLogin} >Login In</h1>
                    <h1 onClick={showSignUp} >Sign Up</h1>
                </div>
                <form className="login-container" style={{ display: showlogin ? "block" : "none" }}>
                    <label>Username : </label>
                    <input type="text" autoFocus />
                    <label>Password : </label>
                    <input type="password" />
                    <div className="bottom-container">
                        <button>Login</button>
                        <p>Or</p>
                        <div className="center-google">
                            <GoogleButton onClick={signWithGoogle} />
                        </div>
                    </div>
                </form>
                <form className="signup-container" style={{ display: showSignIn ? "block" : "none" }}>
                    <label>Username :</label>
                    <input autoFocus type="text" />
                    <label>Email :</label>
                    <input type="email" />
                    <label>Password : </label>
                    <input type="password" />
                    <label>Confirm Password :</label>
                    <input type="password"/>
                    <button>Register</button>
                </form>

            </div>
        </>
    )
}
export default Login;
