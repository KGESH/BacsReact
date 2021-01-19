import React from "react";
import {Link} from "react-router-dom";
import homeSubscribeImg from "../Bacs_Images/test_img.png";
import "./HomeSubscribe.css";

const HomeSubscribe = () => {
    return (
        <section className="section__subscribe">
            <img className="home__subscribe_img" src={homeSubscribeImg}/>
            <div className="home__subscribe_title">구독으로 시작되는<br/>즐겁고 편리한 커피생활</div>
            
            <div className="home__subscribe_detail">박스커피는 맛있는 커피를 넘어<br/>
                즐겁고 편리한 커피 라이프를 제공합니다.<br/><br/>
                어려운 커피의 종류를 세가지 맛으로 분류하여<br/>
                원두 선택을 쉽고 재밌게 만들어드리고,<br/>
                선택한 맛에 따라 매달 새로운 원두를 배송해드려요.<br/><br/>
                커피 애호가 분들을 위한<br/>
                자세한 레시피 가이드, 동영상 등<br/>
                기타 커피 정보들은 서비스랍니다.<br/><br/>
                정기구독으로 새롭고 즐거운 커피문화를 경험해보세요.
            </div>
            <br/>

            <Link to="/Subscribe" className="home__subscribe_link">더 알아보기 &#62;</Link> {/*** &#62; == '>' ***/}
            <div><br/><br/></div>  {/*** white space ***/}

        </section>
    );

}

export default HomeSubscribe;