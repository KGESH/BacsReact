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
        Kakao.init('1b080fda72ac152ebeeea5ad36adad42');
        console.log(`카카오 인증 : ${Kakao.isInitialized()}`);
    
    
        Kakao.Auth.login({
            success: (authObj) => {
                fetch('https://kapi.kakao.com/v2/user/me', {
                    method: "POST",
                    body: JSON.stringify({
                        access_token: authObj.access_token,
                    }),

                })
    
                .then(res=> res.json())
                .then(res => {
                    console.log("then token val : " + res.access_token);
                    localStorage.setItem("Kakao_token", res.access_token);
                    if (res.access_token) {
                        alert("카카오 로그인 성공!")
                        history.push("/oauth");
                    }
                })
            },
            fail: (err) => {
                alert(JSON.stringify(err))
            },
        })
    
    
        /*const { Kakao } = window;
        Kakao.init('1b080fda72ac152ebeeea5ad36adad42');
        console.log(`카카오 인증 : ${Kakao.isInitialized()}`);
    
        Kakao.Auth.authorize({
            redirectUri: "http://localhost:3000/oauth"
        });
        */
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
                <Button onClick={OnKakaoButtonClick} >
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