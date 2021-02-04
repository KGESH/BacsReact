import { Button } from '@material-ui/core';
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import kakaoButton from "../Bacs_Images/login_kakao.svg";
import naverButton from "../Bacs_Images/login_naver.svg";
import emailButton from "../Bacs_Images/login_email.svg";
import "./Login.css";






const LoginPage = () => {

    const history = useHistory();

    const OnKakaoButtonClick = () => {
    
        const { Kakao } = window;
        Kakao.init('ebaaf325637b20ae7519bd8d770f8f70');
        console.log(`카카오 인증 : ${Kakao.isInitialized()}`);


        Kakao.Auth.authorize({
            redirectUri: "https://massive-woods-302507.web.app/oauth"
            //redirectUri: "http://localhost:5000/oauth"
        });
    }    

    return (
        <section className="loginPage__contanier">
            <div className="loginPage__text_wrapper">
                <span className="loginPage__title">간편 로그인 및 회원가입</span>
                <span className="loginPage__detail">을<br/>시작하세요.</span>
            </div>

            <div className="loginPage_button_wrapper">
                {/*    
            <Link to="/SignUpFromKakao" className="loginPage__kakao_button"></Link>
                */}
                {/* <Button onClick={OnKakaoButtonClick} >
                    <img className="loginPage__button_img" src={kakaoButton} />
                </Button> */}

                <Button onClick={OnKakaoButtonClick} id="kakao-login-btn" >
                    <img className="loginPage__button_img" src={kakaoButton} />
                </Button>
                
                    
                <Link to="/SignUpFromNaver" className="loginPage__naver_button" type="button">
                    <img className="loginPage__button_img" src={naverButton} />
                </Link>
                <Link to="/EmailSignUp" className="loginPage__email_button" type="button">
                    <img className="loginPage__button_img" src={emailButton} />
                </Link>
            </div>
            
            
        </section>
    );
}

export default LoginPage;