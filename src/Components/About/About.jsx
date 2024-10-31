import "./About.css"
import care from "./image.jpg"
import workout from "./image2.png"
import food from "./image2.jpeg";
import exerciser from "./workout.avif"
const About = () => {
    return (
        <>

            <div className="main-container">
                <div className="main-inner">
                    <div className="text-content">
                            <p className="about-us">About Us</p>
                        <div className="text-container">
                            <p>
                            Welcome to FitBot, your ultimate fitness companion! FitBot is an AI-driven chatbot designed to support your health and wellness journey, making it easier to stay motivated and achieve your goals. Whether you’re looking for customized workout routines, tailored meal plans, or healthy recipe ideas, FitBot provides a personalized experience suited to your lifestyle.
                            </p>
                            <p>With a focus on simplicity and accessibility, we provide instant advice and tailored fitness plans to suit your unique needs. Whether you're a fitness enthusiast or just starting out, FitBot offers real-time support, helping you stay motivated and on track, wherever you are.</p>

                                <p>Join us on a journey to better health, and let FitBot be your virtual fitness coach!</p>
                        </div>

                    </div>
                    <div className="image-content">
                        <img src={exerciser} alt="Exerciser" />
                    </div>
                </div>
            </div >

            <div className="about-container">
                <div className="box-container">
                    <div className="inner-box">
                        <p>Workout Plans</p>
                        <img className="logo" src={workout} alt="workout" />
                    </div>
                    <p className="box-para">Get customized workout plans tailored to your fitness level and goals, with AI-driven adjustments for optimal results.</p>
                </div>
                <div className="box-container">
                    <div className="inner-box">
                        <p>Nutrition Meals</p>
                        <img src={food} className="logo" alt="food" />
                    </div>
                    <p className="box-para">Receive personalized meal plans and recipes designed to fuel your body and support your fitness goals efficiently.</p>
                </div>
                <div className="box-container">
                    <div className="inner-box">
                        <p>24/7 Support</p>
                        <img src={care} className="logo" alt="service" />
                    </div>
                    <p className="box-para">Our virtual coach is available around the clock to answer your questions and keep you motivated.</p>
                </div>
            </div>

        </>
    )
}
export default About