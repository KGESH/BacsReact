import React from "react";
import Menu from "./Navigation/Menu";


const Navigation = ({isLoggedIn}) => {
    
    return (
        <Menu isLoggedIn={isLoggedIn}/>
    )
}

export default Navigation;
