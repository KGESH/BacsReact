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
import TrialOrder from "./routes/TrialOrder";


const AppRouter = ({isLoggedIn}) => {

    return (
        <Router>
            {/***  Navigation Bar  ***/}
            <Navigation isLoggedIn={isLoggedIn}/>  
            
            <Route path="/" exact={true} component={Home}/>
            <Route path="/oauth" component={KakaoLoginHome} />
            <Route path="/Story" component={Story}/>
            <Route path="/Business" component={Business}/>
            <Route path="/FAQ" component={FAQ}/>
            <Route path="/Login" component={LoginPage}/>
            <Route path="/EmailSignUp" component={EmailSignUp}/>
            <Route path="/SubscribeTest" component={SubscribeTest}/>
            <Route path="/Trial" component={Trial}/>
            <Route path="/Trial-Order" component={TrialOrder}/>
            
            <Footer />
        </Router>
    );
}

export default AppRouter;