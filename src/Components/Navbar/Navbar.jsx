import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <>
            <header className="header">
                <div className="header-inner">
                    <Link  className="header-para" to="/home">
                        <p className="header-para">Home</p>
                    </Link>
                    <Link to="/features">
                        <p className="header-para">Features</p>
                    </Link>
                    <Link to="/about">
                        <p className="header-para">About Us</p>
                    </Link>
                    <Link to="/login">
                        <p className="header-para">Login</p>
                    </Link>
                </div>
            </header>
        </>
    )
}
export default Navbar
