import React from "react";
import "./TrialPackaging.css";
import trialReviewImg from "../Images/bacs_story_bg.jpeg";

const TrialPackaging = () => {
    return (
        <section className="section__trial_packaging">
            <div className="trial__packaging_text_wrapper">
                <span className="trial__packaging_title">정성을 담아 BACS합니다</span>

                <span className="trial__packaging_description">포장은 이러쿵 저러쿵~ <br/>이렇게해서<br/>
                    저렇게 만듭니당<br/>매우 맛있습니다.<br/>
                    친환경적입니다.<br/>선물받는 느낌입니당.<br/>
                </span>

                <span className="trial__packaging_subtitle">
                    UNBACS THE DAY<br/>생생한 후기
                </span>
            </div>
            <img className="trial__packaging_review_img" src={trialReviewImg}/>
        </section>
    );
}

export default TrialPackaging;
