import videos from "./video2.mp4";
import "./Home.css";
import genie from "./bot.png"
import { useState } from "react";
const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openChat = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <div className="video-container">
                <video autoPlay muted loop className="background-video">
                    <source src={videos} type="video/mp4" />
                    Your browser does not support HTML5 video.
                </video>
                <div className="onVideo">
                    <div className="inside-video">
                        <h1>BEGIN YOUR FITNESS JOURNEY</h1>
                        <button className="video-btn" onClick={openChat}>Get Started</button>
                    </div>
                </div>
            </div>
            <div className="model-container">
                <button><img className="model-image" onClick={openChat} src={genie} /></button>
            </div>
            {isOpen && (
                <div className="bot-container">
                    <h1>Hello</h1>
                </div>)}

        </>
    )
}
export default Home