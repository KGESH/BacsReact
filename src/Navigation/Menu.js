import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItems, NavCustomerItems , TempMenuItems } from "./MenuItems";
import mobileHomeLogo from "../Bacs_Images/home_logo.svg";
import pcHomeLogo from "../Bacs_Images/home_logo.svg";
import cartLogo from "../Bacs_Images/cart_logo.svg"
import { AppBar, Toolbar, List, ListItem, ListItemText, Container, Hidden } from "@material-ui/core";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import grey from "@material-ui/core/colors/grey"

import MenuDrawer from "./MenuDrawer";
import "./Menu.css";
import { AssignmentReturnRounded, SentimentSatisfied } from '@material-ui/icons';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#FFFFFF"
        }
    },
    shadows: ["none"]
})

const mobileMaxWidth = 768;


const Menu = () => {
    
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const handleResize = (e) => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    

    return(
        <ThemeProvider theme={theme}>
            <AppBar position="static" className="nav__wrapper">
                <Toolbar>
                    {(windowWidth < mobileMaxWidth) ? (
                        <Container >
                            <div className="nav__mobile_wrapper">
                            <MenuDrawer TempMenuItems={TempMenuItems} MenuItems={MenuItems} NavCustomerItems={NavCustomerItems}/>
                            <Link to="/" className="nav__link_home">
                                <img className="nav__mobile_homeLogo" src={mobileHomeLogo} alt="Home"/>
                            </Link>
                            <Link to="/Cart" className="nav__link_cart">
                                <img className="nav__cartLogo" src={cartLogo} alt="Cart"/>
                            </Link>
                            </div>
                        </Container>
                        
                    ) : (
                        
                        <Container >
                            <div className="nav__pc_wrapper">

                                <Link to="/" className="nav__link_home">
                                    <img className="nav__pc_homeLogo" src={pcHomeLogo} alt="Home"/>
                                </Link>

                                <List component="nav" aria-labelledby="main navigation" className="nav__menu_list">
                                    {TempMenuItems.map(({title, url}) => (
                                        <a href={url} key={title} className="nav__link_text">
                                            <ListItem button> 
                                                <ListItemText primary={title} />
                                            </ListItem>
                                        </a>
                                    ))}
                                    {MenuItems.map(({title, url}) => (
                                        <Link to={url} key={title} className="nav__link_text">
                                            <ListItem button>
                                                <ListItemText primary={title} />
                                            </ListItem>
                                        </Link>
                                    ))}
                                </List> 
                                <List component="nav__customer_menu" aria-labelledby="nav customer" className="nav__menu_list">
                                    {NavCustomerItems.map(({title, url}) => (
                                            <Link to={url} key={title} className="nav__link_text">
                                                <ListItem button>
                                                    <ListItemText primary={title} />
                                                </ListItem>
                                            </Link>
                                        ))}
                                </List>
                            </div>
                            </Container>
                    )}
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    )
}

export default Menu;