import React from "react";
import { Link } from "react-router-dom";
import { isTypeNode } from 'typescript';
import { MenuItems, NavCustomerItems , TempMenuItems } from "./MenuItems";
import "./Navbar.css";
import homeLogo from "../Bacs_Images/home_logo.svg";    
import hamburgerLogo from "../Bacs_Images/hamburger_menu.svg";

class Navbar extends React.Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <nav className="navigation__items">

                

                <Link to="/" className="navigation__link_home">
                    <img className="navigation__homeLogo" src= {homeLogo} alt="Home"/>
                </Link>
                <ul className={this.state.clicked ? "nav__menu_active" : "nav__menu"}>
                    {TempMenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a href={item.url} className={item.className} target="_blank">
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}

                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to={item.url} className={item.className}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>

                <ul className="nav__pc_login_menu">
                    {NavCustomerItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to={item.url} className={item.className}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar;