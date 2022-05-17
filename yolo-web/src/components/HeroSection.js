import React from "react";
import "../App.css";
import "./HeroSection.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

export default function HeroSection() {
    return (
        <div className="hero-container">
            <div className="hero-content">
                <h1>Social Media Tips for You</h1>
                <p>
                    It is never too late to learn a new thing. Here are some
                    social media tips for you. Getting to know how to cash to
                    your flow.
                </p>
                <div className="hero-btn">
                    <Button>Sign Up</Button>
                    <Link to="/discover-more" className="hero-links" onClick="">
                        Discover More →
                    </Link>
                </div>
            </div>
            <div className="hero-image">
                <img src="/images/HeroImage.png" alt="heroImage"></img>
            </div>
        </div>
    );
}
