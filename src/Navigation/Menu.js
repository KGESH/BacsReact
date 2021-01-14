import React from "react";
import { Link } from "react-router-dom";
import { MenuItems, NavCustomerItems , TempMenuItems } from "./MenuItems";
import closeLogo from "../Bacs_Images/menu_close.svg";
import homeLogo from "../Bacs_Images/home_logo.svg";    
import { AppBar, Toolbar, List, ListItem, ListItemText, Container, Hidden } from "@material-ui/core";
import MenuDrawer from "./MenuDrawer";
import "./Menu.css";


class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { windowWidth: window.innerWidth };
    }
    
    handleResize = (e) => {
        this.setState({ windowWidth: Window.innerWidth });
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
        window.addEventListener("resize", this.handleResize);
    }

    render() {
        const windowWidth = this.state.windowWidth;
        return (
            <AppBar position="static">
            <Toolbar>
                <Container maxWidth="md" className="nav__contanier">
                    <Hidden smUp>
                        <Container classNmae="nav__mobile_wrapper">
                            <MenuDrawer TempMenuItems={TempMenuItems} MenuItems={MenuItems} NavCustomerItems={NavCustomerItems}/>
                            <Link to="/" className="nav__link_home">
                                <img className="nav__homeLogo" src= {homeLogo} alt="Home"/>
                            </Link>
                        </Container>
                    </Hidden>

                    

                    <Hidden mdDown>
                        <Container className="nav__pc_wrapper">
                            <Link to="/" className="nav__link_home">
                                <img className="nav__homeLogo" src= {homeLogo} alt="Home"/>
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
                        </Container>
                    </Hidden>
                </Container>
                
            </Toolbar>
        </AppBar>
        );
    }

}


export default Menu;