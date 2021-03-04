import React from "react";
import "./Home.css";
import HomeMain from "../HomeComponent/HomeMain";
import HomeStatistics from "../HomeComponent/HomeStatistics";
import HomeDetail from "../HomeComponent/HomeDetail";
import HomeSubscribe from "../HomeComponent/HomeSubscribe";
import HomeSample from "../HomeComponent/HomeSample";

const Home = () => {

    return (
        <>
            <HomeMain />
            <HomeStatistics />
            <HomeDetail />
            <HomeSubscribe />
            <HomeSample />
        </>
    );
}

export default Home;
