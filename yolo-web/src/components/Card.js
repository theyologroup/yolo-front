import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

export const Card = ({ imagePath, articalPath }) => {
    return (
        <div className="card-container">
            <img className="card-image" src={imagePath} alt="artical"></img>
            <Link to={articalPath} className="card-link">
                Read →
            </Link>
        </div>
    );
};
