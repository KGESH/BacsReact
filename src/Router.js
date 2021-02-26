import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./routes/Home";
import Story from "./routes/Story";
import FAQ from "./routes/Faq";
import Business from "./routes/Business"
import Footer from "./Footer/Footer";
import LoginPage from './routes/Login';
import EmailLogin from "./routes/EmailLogin";
import EmailSignUp from "./routes/EmailSignUp";
import KakaoLoginHome from "./routes/KakaoLoginHome";
import SubscribeTest from "./routes/SubscribeTest";
import Trial from "./routes/Trial";


const AppRouter = ({isLoggedIn}) => {
    console.log("is loggedIn : ");
    if (isLoggedIn) {
        console.log("true@!#");
        console.log(isLoggedIn);

    } else {
        console.log("false@#!");
        console.log(isLoggedIn);
    }
    
    return (
        <Router>
            <Navigation isLoggedIn={isLoggedIn}/>  {/***  Navigation Bar ***/}
            
            <Route path="/" exact={true} component={Home}/>
            <Route path="/oauth" component={KakaoLoginHome} />
            <Route path="/Story" component={Story}/>
            <Route path="/Business" component={Business}/>
            <Route path="/FAQ" component={FAQ}/>
            <Route path="/Login" component={LoginPage}/>
            <Route path="/EmailSignUp" component={EmailSignUp}/>
            <Route path="/SubscribeTest" component={SubscribeTest}/>
            <Route path="/Trial" component={Trial}/>
            
            <Footer />
        </Router>
    );
}

export default AppRouter;