import React from "react";
import { Link } from "react-router-dom";
import { IconButton, List, ListItem, ListItemText, Drawer } from "@material-ui/core";
import hamburgerLogo from "../Bacs_Images/hamburger_menu.svg";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./MenuDrawer.css";


const useStyles = makeStyles({
    list: {
        width: 250,
    },
    linkText: {
        textDecoration: `none`,
        color: `black`
    }
})

const MenuDrawer = ({TempMenuItems, MenuItems, NavCustomerItems, isLoggedIn}) => {
    const classes = useStyles();
    const [state, setState] = useState({ top: false })

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return
        }
        setState({ [anchor]: open })
    }

    const MenuDrawerList = anchor => (
        <div className={classes.list} role="presentation" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>
            <List component="nav">
                {MenuItems.map(({title, url}) => (
                    <Link to={url} key={title} className={classes.linkText}>
                        <ListItem button>
                            <ListItemText primary={title} />
                        </ListItem>
                    </Link>
                ))}
                <div className="menu__login_wrapper">
                    {isLoggedIn ? (
                        <Link to="/" className="nav-links">
                            <ListItem button>
                                <ListItemText primary="로그아웃" />
                            </ListItem>
                        </Link>
                    ) : (
                        <Link to="/Login" className="nav-links">
                            <ListItem button>
                                <ListItemText primary="로그인" />
                            </ListItem>
                        </Link>
                    )}

                    <Link to="/Cart" className="nav-links">
                        <ListItem button>
                            <ListItemText primary="장바구니" />
                        </ListItem>
                    </Link>




                    {/* {NavCustomerItems.map(({title, url}) => (
                        <Link to={url} key={title} className={classes.linkText}>
                            <ListItem button>
                                <ListItemText primary={title} />
                            </ListItem>
                        </Link>
                    ))} */}
                </div>
            </List>
            {/*<List component="nav">
            </List>
            <List component="nav">
                
            </List>*/}
            
        </div>
    )


    return (
        <React.Fragment>                
                <IconButton edge="start" aria-label="menu" onClick={toggleDrawer("top", true)}>
                    <img className="nav__menuLogo" src= {hamburgerLogo} alt="Menu"/>
                </IconButton>
                <Drawer anchor="top" open={state.top} onOpen={toggleDrawer("top", true)} onClose={toggleDrawer("top", false)}>
                    {MenuDrawerList("top")}
                </Drawer>
        </React.Fragment>
    )
}

export default MenuDrawer;