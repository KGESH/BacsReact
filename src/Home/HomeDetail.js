import React from "react";
import {Link} from "react-router-dom";
import homeDetailImg from "../Bacs_Images/home_detail.jpg";
import "./HomeDetail.css";

const HomeDetail = () => {
    return (
        <section className="section__detail">
            <img className="home__detail_img" src={homeDetailImg}/>
            <div className="home__detail_title">UNBACS YOUR DAY<br/>행복한 하루의 시작</div>
            <div className="home__detail_text_normal">스페셜티 커피 하면 무엇이 떠오르시나요?<br/></div>
            <div className="home__detail_text_bold">복잡한 원산지, 숙성기간, 비싼가격...<br/><br/></div>
            <span className="home__detail_text_normal">아침에 일어나 마시는 </span>
            <span className="home__detail_text_super_bold">커피 한 모금,<br/></span>
            <div className="home__detail_text_normal">그 본질에 집중했습니다.<br/><br/></div>
            <div className="home__detail_text_normal">선택의 어려움을 줄이고,<br/>행복을 담아 선물합니다.</div>
            <br/>
            <Link to="/Story" className="home__storyLink">BACS 이야기 &#62;</Link> {/*** &#62; == '>' ***/}
            <div><br/><br/></div>   {/*** white space ***/}
        </section>
    );

}
    
export default HomeDetail;