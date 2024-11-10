import React, { useRef } from "react";
import Home from "../Home/Home";
import About from "../About/About";
import FAQ from "../FAQ/FAQ";
import Navbar from "../Navbar/Navbar";
import Foooter from "../Footer/Footer"
const Fit = () =>{
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
    }
    return (
        <>
         <Navbar scrollToSection={scrollToSection} refs={{ homeRef, aboutRef, faqRef, loginRef }} />
         <div ref={homeRef}>
                <Home/>
            </div>
            <div ref={aboutRef}>
                <About/>
            </div>
            <div ref={faqRef}>
                <FAQ/>
            </div>
            <Foooter/>
        </>
    )
}
export default Fit;