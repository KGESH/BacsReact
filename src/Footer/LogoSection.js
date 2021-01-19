import React from "react";
import { Link } from "react-router-dom";
import "./LogoSection.css";
import bacsLogo from "../Bacs_Images/footer_bacs_logo.svg"
import youtubeLogo from "../Bacs_Images/footer_youtube_logo.svg"
import naverLogo from "../Bacs_Images/footer_naver_logo.svg"
import instagramLogo from "../Bacs_Images/footer_instagram_logo.svg"

const LogoSection = () => {
    return (
        <section className="section__copyright">
                <img className="footer__logo" src={bacsLogo} />
                <div className="footer__sns_icon_wrapper">
                    <a href="https://www.youtube.com/channel/UCGeJRnyBGhS7v8WDNLYtyaw" className="footer__a href" target="_blank">
                        <img className="footer__logo" src={youtubeLogo} />
                    </a>
                    <a href="https://smartstore.naver.com/cafeclara" className="footer__a href" target="_blank">
                        <img className="footer__logo" src={naverLogo} />
                    </a>
                    <a href="https://www.instagram.com/bacsroastery/" className="footer__a href" target="_blank">
                        <img className="footer__logo" src={instagramLogo} />
                    </a>
                    
                </div>
        </section>
    );
}

export default LogoSection;