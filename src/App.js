// import "./App.css";
// import Navbar from "./Components/Navbar/Navbar";
// import Home from "./Components/Home/Home";
// import About from "./Components/About/About";
// import Login from "./Components/Login/Login";
// import Features from "./Components/Features/Features";
// import Footer from "./Components/Footer/Footer";
// const App = () => {
//     return (
//         <>
//             <Navbar />
//             <div id="home" style={{ height: "100vh", backgroundColor: "lightblue" }}>
//                 <Home/>
//             </div>
//             <div id="features" style={{ height: "100vh", backgroundColor: "lightgreen" }}>
//                 <Features/>
//             </div>
//             <div id="about" style={{ height: "100vh", backgroundColor: "lightcoral" }}>
//                 <About/>
//             </div>
//             <div id="login" style={{ height: "100vh", backgroundColor: "lightgoldenrodyellow" }}>
//                 <Login/>
//             </div>
//             <div id="login" style={{ height: "100vh", backgroundColor: "lightgoldenrodyellow" }}>
//                 <Footer/>
//             </div>
//         </>
//     );
// };


// export default App;
import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Login from "./Components/Login/Login";
import FAQ from "./Components/FAQ/FAQ";


const App = () => {
    return (
        <>
            <Navbar />
            <div id="home">
                <Home />
            </div>
            <div id="about">
                <About />
            </div>
            <div id="features" >
                <FAQ/>
            </div>
            <div id="login">
                <Login />
            </div>
        </>
    );
};

export default App;
