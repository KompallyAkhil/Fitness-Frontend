import "./FAQ.css";
const FAQ = () => {
    const data = [
        {
            summary: "What is FitBot and how can it help you?",
            para: "FitBot is your ultimate AI-powered fitness companion. Designed to help you achieve your health and wellness goals, FitBot offers personalized workout routines, customized meal plans, and healthy recipe suggestions tailored to your unique needs."
        },
        {
            summary: "How do I get personalized workout plans?",
            para: "Simply chat with FitBot! Share your fitness goals, current fitness level, and available equipment. FitBot will generate a workout plan designed specifically for you, helping you stay motivated and on track."
        },
        {
            summary : "Can FitBot help me with meal planning?",
            para : "Absolutely! FitBot can create meal plans based on your dietary preferences and fitness goals. Whether you want to lose weight, build muscle, or maintain a healthy lifestyle, FitBot provides nutritious and delicious recipe ideas.",
        },
        {
            summary : "Is FitBot suitable for beginners?",
            para : "Yes! FitBot is designed for everyone, whether you're just starting your fitness journey or are an experienced athlete. It tailors recommendations to your fitness level and adjusts as you progress."
        },
        {
            summary : "What kind of support does FitBot offer?",
            para : "FitBot provides real-time support and motivation. You can ask questions about exercises, receive tips on maintaining a balanced diet, and get encouragement to help you stay committed to your goals."
        },
        {
            summary : "What devices can I use to access FitBot?",
            para : "You can access FitBot on any device with a web browser, including PCs, laptops, tablets, and smartphones. It's easy and convenient—just log in, and you're ready to go!"
        }
    ]
    return (
        <>
            <div className="faq-main-container">
                <div className="faq-container">
                    <h1>FAQ - frequently asked questions</h1>
                </div>
                <div className="faq-questions">
                    {data && data.map((i) => (
                        <details>
                            <summary>{i.summary}</summary>
                            <p>{i.para}</p>
                        </details>
                    ))}
                </div>
            </div>
        </>
    )
}
export default FAQ