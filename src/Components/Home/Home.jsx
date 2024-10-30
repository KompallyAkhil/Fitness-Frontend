import videos from "./video2.mp4";
import "./Home.css";
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
                        <h1>“ Chat with Your Personal Fitness Guide Now ! ”</h1>
                        <button className="video-btn">Get Started</button>
                    </div>
                </div>
            </div>
            
        </>
    )
}
export default Home