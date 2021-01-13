import React from "react";
import { Link } from "react-router-dom";
import { MenuItems, NavCustomerItems , TempMenuItems } from "./MenuItems";
import closeLogo from "../Bacs_Images/menu_close.svg";
import homeLogo from "../Bacs_Images/home_logo.svg";    
import { AppBar, Toolbar, List, ListItem, ListItemText, Container, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuDrawer from "./MenuDrawer";


const useStyles = makeStyles({
    navDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`
    },
    navbarDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`
    },
    LinkText: {
        textDecoration: `none`,
        color: `white`
    }
});

const MobileMenu = () => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <Container maxWidth="md" className={classes.navbarDisplayFlex}>
                    <Link to="/" className="nav__link_home">
                        <img className="nav__homeLogo" src= {homeLogo} alt="Home"/>
                    </Link>
                    <Hidden smDown>
                        <List component="nav_" aria-labelledby="main navigation" className={classes.navDisplayFlex}>
                            {TempMenuItems.map(({title, url}) => (
                                <a href={url} key={title} className={classes.LinkText}>
                                    <ListItem button>
                                        <ListItemText primary={title} />
                                    </ListItem>
                                </a>
                            ))}
                            {MenuItems.map(({title, url}) => (
                                <Link to={url} key={title} className={classes.LinkText}>
                                    <ListItem button>
                                        <ListItemText primary={title} />
                                    </ListItem>
                                </Link>
                            ))}
                            
                        </List>
                        <List component="nav__customer_menu" aria-labelledby="nav customer" className={classes.navDisplayFlex}>
                            {NavCustomerItems.map(({title, url}) => (
                                    <Link to={url} key={title} className={classes.LinkText}>
                                        <ListItem button>
                                            <ListItemText primary={title} />
                                        </ListItem>
                                    </Link>
                                ))}
                        </List>
                    </Hidden>
                    
                    <Hidden mdUp>
                        <MenuDrawer TempMenuItems={TempMenuItems} MenuItems={MenuItems} NavCustomerItems={NavCustomerItems}/>
                    </Hidden>
                </Container>
                
            </Toolbar>
        </AppBar>
    )
}

export default MobileMenu;