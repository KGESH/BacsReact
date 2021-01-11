import React from "react";
import { Link } from "react-router-dom";
import logo from "./Images/bacs_home_logo.jpg";
import menu_bar from "./Images/bars-solid.svg"
/*import "./FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
*/
import "./Navigation.css";

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
            <div className ="navigation__home">
                <Link to="/" className="navigation__link_home">
                    <img className="navigation__homeLogo" src= {logo} alt="Home"/>
                </Link>
            </div>
                
            <ul className="navigation__menu">
                <li><a href={url.subscribe} className="navigation__text" target="_blank">구독하기</a></li>    
                <li><a href={url.naverStore} className="navigation__text" target="_blank">선물하기</a></li>
                <li><Link to="/BrandStory" className="navigation__text">BACS이야기</Link></li>
                <li><Link to="/Business" className="navigation__text">BUSINESS</Link></li>
                <li><Link to="/FAQ" className="navigation__text">고객센터</Link></li>
            </ul>

            <ul className="navigation__customer">
                <li><Link to="/LoginPage" class="navigation__text">로그인</Link></li>
                <li><Link to="/Cart" class="navigation__text">장바구니</Link></li>
            </ul>

            <a href="" className="navigation__toggle_button">
                <i className="navigation__menu_bar">{menu_bar}</i>
            </a>
        </div>
    )
}

export default Navigation;