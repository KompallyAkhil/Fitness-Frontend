import "./About.css"
import care from "./image.jpg"
import workout from "./image2.png"
import food from "./image2.jpeg";
const About = () => {
    return (
        <>
      <div className="about-container">
                <div className="box-container">
                <div className="inner-box">
                        <p>Workout Plans</p>
                        <img src={workout}/>
                    </div>
                    <p className="box-para">Get customized workout plans tailored to your fitness level and goals, with AI-driven adjustments for optimal results.</p>
                </div>
                <div className="box-container">
                <div className="inner-box">
                        <p>Nutrition Meals</p>
                        <img src={food}/>
                    </div>
                    <p className="box-para">Receive personalized meal plans and recipes designed to fuel your body and support your fitness goals efficiently.</p>
                </div>
                <div className="box-container">
                    <div className="inner-box">
                        <p>24/7 Support</p>
                        <img src={care}/>
                    </div>
                    <p className="box-para">Our virtual coach is available around the clock to answer your questions and keep you motivated.</p>
                </div>
            </div>
           
        </>
    )
}
export default About