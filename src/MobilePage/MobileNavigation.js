import React from "react";
import { Link } from "react-router-dom";
import logo from "../Bacs_Images/home_logo.svg";
import "./MobileNavigation.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import cartIcon from '../Bacs_Images/cart.svg';


function MobileNavigation(props) {

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

                <ul className={props.state.visible ? "navigation__mobile_menu_visible" : "navigation__mobile_menu_invisible"}>
                    <li><a href={url.subscribe} className="navigation__text" target="_blank">구독하기</a></li>    
                    <li><a href={url.naverStore} className="navigation__text" target="_blank">선물하기</a></li>
                    <li><Link to="/Story" className="navigation__text">BACS이야기</Link></li>
                    <li><Link to="/Business" className="navigation__text">BUSINESS</Link></li>
                    <li><Link to="/FAQ" className="navigation__text">고객센터</Link></li>
                </ul>

                <Link to="/Cart" className="navigation__text">
                    <img className="navigation__cartLogo" src= {cartIcon} alt="Home"/>
                </Link>

                <button className="navigation__toggle_button">
                    <FontAwesomeIcon onClick={this.ToggleMenu} className="navigation__menu_button" icon={ faBars } size="1x" />
                </button>
        </div>
    );
}

export default MobileNavigation;