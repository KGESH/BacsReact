import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { MenuItems, NavCustomerItems , TempMenuItems } from "./MenuItems";
import mobileHomeLogo from "../Bacs_Images/home_logo.svg";
import pcHomeLogo from "../Bacs_Images/home_logo.svg";
import cartLogo from "../Bacs_Images/cart_logo.svg"
import { AppBar, Toolbar, List, ListItem, ListItemText, Container, Hidden } from "@material-ui/core";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import grey from "@material-ui/core/colors/grey"
import { auth } from "../FireBase";
import MenuDrawer from "./MenuDrawer";
import "./Menu.css";
import { Debounce } from "./Debounce";
import _ from "lodash";
import Headroom from "react-headroom";



const navbarStylesWrapper = {
    position: "fixed",
    width: "100%",
    transition: "top 0.4s"
}

const theme = createMuiTheme({
    
    palette: {
        primary: {
            main: "#FFFFFF"
        }
    },
    shadows: ["none"]
})

const mobileMaxWidth = 768;


const Menu = ({isLoggedIn}) => {
    const history = useHistory();
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const handleResize = (e) => setWindowWidth(window.innerWidth);
    // const handleScroll = () => {
    //     const currentScrollPos = window.pageYOffset;
    //     console.log(currentScrollPos);
    //     setVisible((prevScrollPos > currentScrollPos && 
    //                     prevScrollPos - currentScrollPos > 70) ||
    //                         currentScrollPos < 10);

    //     setPrevScrollPos(currentScrollPos);
    // };

    // const handleScroll = Debounce(() => {
    //     const currentScrollPos = window.pageYOffset;
    //     console.log(currentScrollPos);
    //     setVisible((prevScrollPos > currentScrollPos && 
    //                     prevScrollPos - currentScrollPos > 70) ||
    //                         currentScrollPos < 10);

    //     setPrevScrollPos(currentScrollPos);
    // }, 100);

    // useEffect(() => {
    //     window.addEventListener("scroll", _.throttle(handleScroll,400));
    // }, [prevScrollPos, visible, handleScroll]);

    window.addEventListener("resize", handleResize);


    

    return(
        <Headroom>
            <ThemeProvider theme={theme}>
                <AppBar position="static" className="nav__wrapper">
                    <Toolbar>
                        {(windowWidth < mobileMaxWidth) ? (
                            <Container >
                                <div className="nav__mobile_wrapper">
                                <MenuDrawer TempMenuItems={TempMenuItems} MenuItems={MenuItems} NavCustomerItems={NavCustomerItems} isLoggedIn={isLoggedIn}/>
                                <Link to="/" className="nav__link_home">
                                    <img className="nav__mobile_home_logo" src={mobileHomeLogo} alt="Home"/>
                                </Link>
                                <Link to="/Cart" className="nav__link_cart">
                                    <img className="nav__cart_logo" src={cartLogo} alt="Cart"/>
                                </Link>
                                </div>
                            </Container>

                            ) : (
                                
                                <Container>
                                    <div className="nav__pc_wrapper">
                                        <Link to="/" className="nav__link_home">
                                            <img className="nav__pc_home_logo" src={pcHomeLogo} alt="Home"/>
                                        </Link>

                                        <List component="nav" aria-labelledby="main navigation" className="nav__menu_list">
                                            {/*** 구독하기, 선물하기 페이지 제작 전까지 임시 페이지로 쓸 네비게이션 아이템***/}
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
                                            {isLoggedIn ? (
                                                <Link className="nav__link_text" onClick={() => {
                                                    auth.signOut();
                                                    history.push("/");
                                                }}>
                                                    <ListItem button>
                                                        <ListItemText primary="로그아웃" />
                                                    </ListItem>
                                                </Link>
                                            ) : (
                                                <Link to="/Login" className="nav__link_text">
                                                    <ListItem button>
                                                        <ListItemText primary="로그인" />
                                                    </ListItem>
                                                </Link>
                                            )}
                                            <Link to="/Cart" className="nav__link_text">
                                                <ListItem button>
                                                    <ListItemText primary="장바구니" />
                                                </ListItem>
                                            </Link>

                                            {/* {NavCustomerItems.map(({title, url}) => (
                                                    <Link to={url} key={title} className="nav__link_text">
                                                        <ListItem button>
                                                            <ListItemText primary={title} />
                                                        </ListItem>
                                                    </Link>
                                            ))} */}
                                        </List>
                                    </div>
                                </Container>
                        )}
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </Headroom>
    )
}

export default Menu;