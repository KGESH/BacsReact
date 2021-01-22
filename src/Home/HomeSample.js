import React from "react";
import {Link} from "react-router-dom";
import homeSampleImg from "../Bacs_Images/home_sample2.png";
import homeSampleTrialButton from "../Bacs_Images/home_sample_start_button.svg";
import "./HomeSample.css";

const HomeSample = () => {
    return (
        <section className="section__sample">
            <div className="home__sample_title1">첫 잔은 무료로</div>
            <div className="home__sample_title2">박스 샘플 패키지</div>
            <div className="sample__button_wrapper">
                <Link to="/trial" className="home__trialButton" type="button">
                    <img src={homeSampleTrialButton} />
                </Link>
            </div>
            <section className="section_sample_detail">

            <img className="home__sample_img" src={homeSampleImg}/>
            <div className="home__sample_detail_wrapper">

                <div className="home__sample_detail_title">첫 구독 혜택</div>
                <div className="home__sample_detail_detail">구독 패키지 + 드립백 스탠드 + 샘플팩</div>
                <div>
                <span className="home__sample_detail_price_before"><del>40,000원 </del></span>
                <span className="home__sample_detail_price_after">22,000원</span>
                </div>
            </div>
            <div><br/><br/><br/></div>  {/***  white space  ***/}
            </section>
            
            </section>
    );
}

export default HomeSample;