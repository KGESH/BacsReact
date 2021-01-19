import React from "react";
import {Link} from "react-router-dom";
import homeSampleImg from "../Bacs_Images/home_sample2.png";
import "./HomeSample.css";

const HomeSample = () => {
    return (
        <section className="section__sample">
            <h2>첫 잔은 무료로</h2>
            <h1>박스 샘플 패키지</h1>
            <div className="sample__button_wrapper">
                <Link to="/trial" className="home__trialButton" type="button">시작하기</Link>
            </div>
            <img className="home__sample_img" src={homeSampleImg} />
            <h3>첫 구독 혜택</h3>
            <h4>구독 패키지 + 드립백 스탠드 + 샘플팩</h4>
            <div>
                <span className="sample__text_price"><del>40,000원</del></span>
                <sapn className="sample__text_sale_rice"> 22,000원</sapn>
            </div> 
            </section>
    );
}

export default HomeSample;