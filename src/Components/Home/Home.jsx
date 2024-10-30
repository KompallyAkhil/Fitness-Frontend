import videos from "./video1.mp4";
import "./Home.css";
const Home = () => {
    return (
        <>
            <div>
                <video autoPlay muted loop className="background-video">
                    <source src={videos} type="video/mp4" />
                    Your browser does not support HTML5 video.
                </video>
            </div>
            <p>More about the about section</p>
        </>
    )
}
export default Home