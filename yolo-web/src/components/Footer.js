import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
    return (
        <div className="footer-container">
            <Link to="/" className="footer-logo" onClick="">
                YOLO
            </Link>
            <div className="footer-contact">
                <p>Get In Touch</p>
                <ul className="soical-icon">
                    <li className="soical-icon-item">
                        <img src="/images/InsIcon.png" alt=""></img>
                    </li>
                    <li className="soical-icon-item">
                        <img src="/images/FaceBookIcon.png" alt=""></img>
                    </li>
                    <li className="soical-icon-item">
                        <img src="/images/TwitterIcon.png" alt=""></img>
                    </li>
                </ul>
            </div>
        </div>
    );
}
