import React from "react";
import { Link } from "react-router-dom";
import logo from "./Images/bacs_home_logo.jpg";
import "./Navigation.css"

function Navigation() {
    const nav_images = {
        homeLogo : "./Images/bacs_home_logo.jpg",
        cartLogo : ""
    };

    const url = {
        subscribe: "https://docs.google.com/forms/d/e/1FAIpQLSeh4uLu0KubPGgEnnxzW8VYSK6EK_X59Df-WCll_LAIileGlw/viewform",
        naverStore: "https://smartstore.naver.com/cafeclara"
    };

    
    return (
        <div className="top__navigation">
            <Link to="/" className="navigation__home_image">
                <img className="navigation__homeLogo" src= {logo} alt="Home"/>
            </Link>
            <span className="navigation__wrapper">
                {/*<Link to="/Subscribe" className="navigation__text">구독하기</Link>*/}
                <a href={url.subscribe} className="navigation__text" target="_blank">구독하기</a>
                <Link to="/BrandStory" className="navigation__text">ABOUT US</Link>
                {/*<Link to="/Shop" className="navigation__text">선물하기</Link>*/}
                <a href={url.naverStore} className="navigation__text" target="_blank">선물하기</a>
                <Link to="/Business" class="navigation__text">BUSINESS</Link>
            </span>
            <Link to="/LoginPage" class="navigation__text">로그인</Link>
            <Link to="/Cart" class="navigation__text">장바구니</Link>
        </div>
    )
}

export default Navigation;