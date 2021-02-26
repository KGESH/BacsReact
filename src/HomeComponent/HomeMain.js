import React from "react";
import {Link} from "react-router-dom";
import homeMainImg from "../Bacs_Images/home.png";
import homeTrialBtn from "../Bacs_Images/home_trial_button.svg";
import "./HomeMain.css";

const HomeMain = () => {
    return (
        <section className="section__home">
            <div>
                <span className="home__title_first_line">행복한 하루의 시작<br/></span>
                <span className="home__title_second_line">커피 구독 서비스</span>
            </div>
            <div className="home__title_thirdLine">첫 가입시 샘플팩을 무료로 드려요</div>
            <Link to="/trial" type="button"><img src={homeTrialBtn} className="home__trial_button"/></Link>
            <div className="home__main_img_wrapper">
                <img className="home__main_img" src={homeMainImg}/>
            </div>
        </section>
    );
}

export default HomeMain;