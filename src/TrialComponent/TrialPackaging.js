import React, { useState } from "react";
import "./TrialPackaging.css";
import trialReviewImg from "../Images/bacs_story_bg.jpeg";
import trialButtonImg from "../Bacs_Images/trial_button.svg"
import TrialModal from "./TrialModal";

const TrialPackaging = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const onModalClick = () => {
        setIsModalOpen(!isModalOpen);
    }

    return (
        <section className="section__trial_packaging">
            <div className="trial__packaging_text_wrapper">
                <span className="trial__packaging_title">정성을 담아 BACS합니다</span>

                <span className="trial__packaging_description">포장은 이러쿵 저러쿵~ <br/>이렇게해서<br/>
                    저렇게 만듭니당<br/>매우 맛있습니다.<br/>
                    친환경적입니다.<br/>선물받는 느낌입니당.<br/><br/><br/>
                </span>

                <span className="trial__packaging_subtitle">
                    UNBACS THE DAY<br/>생생한 후기<br/><br/><br/>
                </span>
            </div>
            <img className="trial__packaging_review_img" src={trialReviewImg}/>
            <div className="trial__packaging_button_wrapper">
                <button className="trial__flavor_subscribe_button" onClick={onModalClick}><img className="tiral__flavor_subscribe_button_img" src={trialButtonImg}/></button>
                <button className="trial__flavor_store_button">구독말고 커피 선물할래요.</button>
            </div>
            <TrialModal isOpen={isModalOpen} onModalClose={onModalClick}/> {/*구독 팝업*/}

        </section>
    );
}

export default TrialPackaging;
