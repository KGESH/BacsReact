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

const MenuDrawer = ({TempMenuItems, MenuItems, NavCustomerItems}) => {
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
                {TempMenuItems.map(({title, url}) => (
                    <a href={url} key={title} className={classes.linkText}>
                        <ListItem button>
                            <ListItemText primary={title} />
                        </ListItem>
                    </a>
                ))}
            </List>
            <List component="nav">
                {MenuItems.map(({title, url}) => (
                    <Link to={url} key={title} className={classes.linkText}>
                        <ListItem button>
                            <ListItemText primary={title} />
                        </ListItem>
                    </Link>
                ))}
            </List>
            <List component="nav">
                {NavCustomerItems.map(({title, url}) => (
                    <Link to={url} key={title} className={classes.linkText}>
                        <ListItem button>
                            <ListItemText primary={title} />
                        </ListItem>
                    </Link>
                ))}
            </List>
            
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