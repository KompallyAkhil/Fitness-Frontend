import videos from "./video2.mp4";
import "./Home.css";
import genie from "./bot.png"
const Home = () => {
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
                        <button className="video-btn">Get Started</button>
                    </div>
                </div>
            </div>
            <div className="model-container">
                <button><img className="model-image" src={genie}/></button>
        </div>
            
        </>
    )
}
export default Home