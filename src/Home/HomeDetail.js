import React from "react";
import {Link} from "react-router-dom";
import homeDetailImg from "../Bacs_Images/home_detail.png";
import "./HomeDetail.css";

const HomeDetail = () => {
    return (
        <section className="section__detail">
            <img className="home__detail_img" src={homeDetailImg}/>
            <h1>UNBACS YOUR DAY<br/>행복한 하루의 시작</h1>
            <h4>스페셜티 커피 하면 무엇이 떠오르시나요?</h4>
            <h3>복잡한 원산지, 숙성기간, 비싼가격...</h3>
            <h4>아침에 일어나 마시는 커피 한 모금,</h4>
            <h4>그 본질에 집중했습니다.</h4>
            <h4>선택의 어려움을 줄이고,<br/>행복을 담아 선물합니다.</h4>
            <Link to="/Story" className="home__storyLink">BACS 이야기 &#62;</Link> {/*** &#62; == '>' ***/}
        </section>
    );

}
    
export default HomeDetail;