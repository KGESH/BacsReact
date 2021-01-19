import React from "react";
import {Link} from "react-router-dom";
import homeMainImg from "../Bacs_Images/home.png";
import "./HomeMain.css";

const HomeMain = () => {
    return (
        <section className="section__home">
            <h2 className="home__title">행복한 하루의 시작</h2>
            <h2 className="home__title">커피 구독 서비스</h2>
            <h5 className="home__title">첫 가입시 샘플팩을 무료로 드려요</h5>
            <Link to="/trial" className="home__trialButton" type="button">더 알아보기</Link>
            <img className="home__main_img" src={homeMainImg}/>
        </section>
    );
}

export default HomeMain;