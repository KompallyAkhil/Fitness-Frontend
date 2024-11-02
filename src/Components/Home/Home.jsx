import videos from "./video2.mp4";
import "./Home.css";
import bot from "./bot.png"
import user from "./user.png"
import { useEffect, useState, useRef } from "react";
import axios from "axios"
const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isInput, setIsInput] = useState("");
    const [messages, setMessages] = useState([]);
    const [showBotMessage, setShowBotMessage] = useState(false);
    const messagesEndRef = useRef();
    const openChat = () => {
        setIsOpen(!isOpen);
    }
    function changeInput(e) {
        setIsInput(e.target.value);
    }
    async function sendMessage() {
        if (isInput.trim()) {
            console.log(isInput)
            const newMessage = { text: isInput, isUser: true };
            setMessages([...messages, newMessage]);
            setIsInput("");
            const response = await axios.get(`http://localhost:8000/chat?text=${isInput}`);
            const result = response.data.response;
            console.log(result)
            setTimeout(() => {
                const botMessage = { text: result, isUser: false };
                setMessages((prevMessages) => [...prevMessages, botMessage]);
            }, 1000);
        }
    };
    useEffect(() => {
        setTimeout(() => {
            setShowBotMessage(true);
        }, 3000);
        return () => clearTimeout(); 
    }, []);
    const clickEnter = (e) => {
        if (e.key === "Enter") sendMessage();
    }
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages])
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
                <button><img className="model-image" alt="bot-Image" onClick={openChat} src={bot} /></button>
            </div>
            <div>
                {isOpen && (
                    <div className="chatbot">
                        <h3>Chat With Bot</h3>
                        <div className="chat-messages">
                            {showBotMessage && (
                                <div className="chat-bubble bot">
                                    <img className="chat-image" src={bot} alt="Bot" />
                                    <p>How Can I Help You ?</p>
                                </div>
                            )}
                            {messages.map((msg, index) => (
                                <div key={index} className={`chat-bubble ${msg.isUser ? 'user' : 'bot'}`}>
                                    {msg.isUser && <img className="chat-image" src={user} alt="User" />}
                                    {!msg.isUser && <img className="chat-image" src={bot} alt="Bot" />}
                                    {msg.text}
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>
                        <div className="chat-input">
                            <textarea
                                autoFocus
                                placeholder="Ask a question . . ."
                                value={isInput}
                                onChange={changeInput}
                                spellCheck="false"
                                required
                                onKeyDown={clickEnter}
                            ></textarea>
                        </div>
                    </div>
                )}
            </div>

        </>
    )
}
export default Home