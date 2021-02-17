import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import HomeMain from "../Home/HomeMain";
import HomeStatistics from "../Home/HomeStatistics";
import HomeDetail from "../Home/HomeDetail";
import HomeSubscribe from "../Home/HomeSubscribe";
import HomeSample from "../Home/HomeSample";

import { auth } from "../FireBase";

const Home = () => {

    auth.onAuthStateChanged((user) => {
        if (user) {
            console.log("login user = ");
            console.log(user);
        } else {
            console.log("No user Login");
        }
    })

    return (
        <div className="home">
            <HomeMain />
            <HomeStatistics />
            <HomeDetail />
            <HomeSubscribe />
            <HomeSample />
        </div>
    );
}

export default Home;
