import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import HomeMain from "../Home/HomeMain";
import HomeStatistics from "../Home/HomeStatistics";
import HomeDetail from "../Home/HomeDetail";
import HomeSubscribe from "../Home/HomeSubscribe";
import HomeSample from "../Home/HomeSample";


const Home = () => {

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
