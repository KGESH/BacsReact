import React from "react";
import "./TrialDetail.css";
import trialDetailImg from "../Bacs_Images/home_subscribe.png";  /* test img */

const TrialDetail = () => {
    return (
        <section className="section__trial_detail">
            <div className="trail__detail_text_wrapper">
                <span className="trial__detail_title">BACS 구독,<br/>새로운 경험.<br/>절약되는 시간과 돈.</span>
            </div>
                <img className="trial__detail_img" src={trialDetailImg}/>
        </section>
    )
}

export default TrialDetail;
