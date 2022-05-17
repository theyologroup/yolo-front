import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick="">
                        YOLO
                    </Link>
                    <ul className="nav-menu">
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick="">
                                Articles
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/product-list"
                                className="nav-links"
                                onClick=""
                            >
                                Product List
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/community"
                                className="nav-links"
                                onClick=""
                            >
                                Community
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/about-us"
                                className="nav-links"
                                onClick=""
                            >
                                About Us
                            </Link>
                        </li>
                    </ul>
                    <ul className="nav-sign-menu">
                        <li className="nav-item">
                            <Link
                                to="/sign-in"
                                className="nav-links"
                                onClick=""
                            >
                                Sign In
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                to="/sign-up"
                                className="nav-links"
                                onClick=""
                            >
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
