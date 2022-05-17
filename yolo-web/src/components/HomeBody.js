import React from "react";
import { Card } from "./Card";
import "./HomeBody.css";

export default function HomeBody() {
    return (
        <div className="body-container">
            <div className="body-head">
                <p>
                    Free Access of Social Media optimization Articles, Contact
                    with More than 800+ KOLs.
                </p>
            </div>
            <div className="body-articles">
                <Card
                    imagePath="/images/ArticleImage.png"
                    articalPath="/article"
                ></Card>
                <Card
                    imagePath="/images/ArticleImage.png"
                    articalPath="/article"
                ></Card>
                <Card
                    imagePath="/images/ArticleImage.png"
                    articalPath="/article"
                ></Card>
                <Card
                    imagePath="/images/ArticleImage.png"
                    articalPath="/article"
                ></Card>
                <Card
                    imagePath="/images/ArticleImage.png"
                    articalPath="/article"
                ></Card>
                <Card
                    imagePath="/images/ArticleImage.png"
                    articalPath="/article"
                ></Card>
            </div>
            <div className="body-services">
                <p>Know More about Our Services and KOL Communites</p>
                <p className="body-label">Our Services</p>

                <div className="body-servicesImage">
                    <a className="servicesName" href="/services">
                        {" "}
                    </a>
                    <a className="servicesName" href="/services">
                        {" "}
                    </a>
                    <a className="servicesName" href="/services">
                        {" "}
                    </a>
                    <a className="servicesName" href="/services">
                        {" "}
                    </a>
                </div>
            </div>
            <div className="body-kol">
                <p className="body-label">Our KOLs</p>
                <img
                    className="body-KOLsImage"
                    src="/images/KOLImage.png"
                    alt="KOLsImage"
                ></img>
            </div>
        </div>
    );
}
