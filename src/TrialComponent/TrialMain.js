import React from "react";
import "./TrialMain.css";
import trialMainImg from "../Bacs_Images/home_sample.png";  /* test img */

const TrialMain = () => {
    return (
        <section className="section__trial_main">
            <div className="trail__main_text_wrapper">
                <span className="trial__main_title">빠르고 편리하게 즐기는<br/>나만의 커피 라이프<br/></span>
                <span className="trial__main_subtitle">커피 구독으로 시작하세요.</span>
            </div>
                <img className="trial__main_img" src={trialMainImg}/>
        </section>
    )
}

export default TrialMain;
