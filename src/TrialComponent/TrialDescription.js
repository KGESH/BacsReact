import React from "react";
import "./TrialDescription.css";
import trialDescriptionImg from "../Bacs_Images/home_detail.jpg";

const TrialDescription = () => {
    return (
        <section className="section__trial_description">
            <div className="trial__description_text_wrapper">
                <span className="trial__description_title">일단 하루를 함께해봐요<br/></span>
                <span className="trial__description_subtitle">첫 가입시 샘플팩을 무료로 드려요</span>
            </div>
            <img className="trial__description_img" src={trialDescriptionImg} />
            <div className="trial__description_plankit_text"><br/>플랜 키트<br/></div>
            <div className="trial__description_detail_title">이렇게 진행이 돼요<br/></div>
            <div className="trial__description_detail_wrapper">
                <span className="trial__description_detail">이렇게 진행이 돼요<br/>이렇게 진행이 돼요<br/><br/>이렇게 진행이 돼요<br/>이렇게 진행이 돼요<br/><br/>이렇게 진행이 돼요<br/>이렇게 진행이 돼요<br/><br/></span>
            </div>
            

        </section>
    )
}

export default TrialDescription;
