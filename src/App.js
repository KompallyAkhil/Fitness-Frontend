import React, { useRef } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import FAQ from "./Components/FAQ/FAQ";
import Login from "./Components/Login/Login";
const App = () => {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const faqRef = useRef(null);
    const loginRef = useRef(null);
    const scrollToSection = (ref) => {
        const offset = 80;
        if (ref.current) {
            const position = ref.current.offsetTop - offset;
            window.scrollTo({ top: position, behavior: "smooth" });
        }
        ref.current?.scrollIntoView({ behavior: "smooth" });
        console.log(ref.current);
    }
    return (
        <>
            <Navbar scrollToSection={scrollToSection} refs={{ homeRef, aboutRef, faqRef, loginRef }} />
            <div ref={homeRef}>
                <Home />
            </div>
            <div ref={aboutRef}>
                <About />
            </div>
            <div ref={faqRef}>
                <FAQ />
            </div>
            <div ref={loginRef}>
                <Login />
            </div>
        </>
    );
};

export default App;
