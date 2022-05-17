import React from "react";
import "./Card.css";
import "./RoundImage.css";

export const RoundImage = ({ imagePath }) => {
    return (
        <div className="roundImage">
            <img className="round-img" src={imagePath} alt=""></img>
        </div>
    );
};
