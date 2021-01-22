import { Button } from '@material-ui/core';
import React from "react";
import { Link } from "react-router-dom";
import kakaoButton from "../Bacs_Images/login_kakao.svg";
import naverButton from "../Bacs_Images/login_naver.svg";
import emailButton from "../Bacs_Images/login_email.svg";
import "./Login.css";

const LoginPage = () => {
    return (
        <section className="loginPage__contanier">
            <div className="loginPage__text_wrapper">
                <span className="loginPage__title">간편 로그인 및 회원가입</span>
                <span className="loginPage__detail">을<br/>시작하세요.</span>
            </div>

            <div className="loginPage_button_wrapper">
                <Link to="/SignUpFromKakao" className="loginPage__kakao_button">
                    <img className="loginPage__button_img" src={kakaoButton} />
                </Link>
                    
                <Link to="/SignUpFromNaver" className="loginPage__naver_button" type="button">
                    <img className="loginPage__button_img" src={naverButton} />
                </Link>
                <Link to="/SignUpFromEmail" className="loginPage__email_button" type="button">
                    <img className="loginPage__button_img" src={emailButton} />
                </Link>
            </div>
            
            
        </section>
    );
}

export default LoginPage;