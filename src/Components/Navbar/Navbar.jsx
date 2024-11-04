import React, { useEffect, useState } from "react";
import "./Navbar.css";
const Navbar = ({ scrollToSection, refs }) => {
    const [user,setUser] = useState('');
    const logOut = () => {
        localStorage.clear();
        window.location.reload();
    }
    useEffect(()=>{
        setUser(localStorage.getItem('Username'))
    },[]);
    return (
        <nav className="header">
            <ul className="header-inner">
                <li className="header-para" onClick={() => scrollToSection(refs.homeRef)}>
                    Home
                </li>
                <li className="header-para" onClick={() => scrollToSection(refs.aboutRef)}>
                    About Us
                </li>
                <li className="header-para" onClick={() => scrollToSection(refs.faqRef)}>
                    FAQ
                </li>
                <li className="header-para" onClick={logOut}>
                  {user}
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
