import React from "react";
import "./Navbar.css";
const Navbar = ({ scrollToSection, refs }) => {
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
            </ul>
        </nav>
    );
};

export default Navbar;
