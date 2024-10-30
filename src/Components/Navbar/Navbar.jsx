// import React from "react";
// import "./Navbar.css";
// import { Link} from "react-scroll";
// const Navbar = () => {
//     return (
//         <>
//             <nav className="header">
//                 <ul className="header-inner">
//                     <li className="header-para">
//                         <Link to="home" smooth={true} duration={500}>About</Link>
//                     </li >
//                     <li className="header-para" smooth={true} duration={500}>
//                         <Link to="features">Features</Link>
//                     </li>
//                     <li className="header-para" smooth={true} duration={500}>
//                         <Link to="about">About</Link>
//                     </li>
//                     <li className="header-para" smooth={true} duration={500}>
//                         <Link to="login">Login</Link>
//                     </li>
//                 </ul>
//             </nav>
//         </>
//     );
// };

// export default Navbar;
import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
const Navbar = () => {
    return (
        <>
        <nav className="header">
            <ul className="header-inner">
                <li className="header-para">
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className="header-para">
                    <Link to="features" smooth={true} duration={500}>
                        About Us
                    </Link>
                </li>
                <li className="header-para">
                    <Link to="about" smooth={true} duration={500}>
                        Features
                    </Link>
                </li>
                <li className="header-para">
                    <Link to="login" smooth={true} offset={-100} duration={500}>
                        Login
                    </Link>
                </li>
            </ul>
        </nav>
        </>
        
    );
};

export default Navbar;
