import React from "react";
import "./Home.css";
import { Link, useLocation, useHistory } from "react-router-dom";
import HomeMain from "../Home/HomeMain";
import HomeStatistics from "../Home/HomeStatistics";
import HomeDetail from "../Home/HomeDetail";
import HomeSubscribe from "../Home/HomeSubscribe";
import HomeSample from "../Home/HomeSample";
import * as qs from 'query-string';
import { firebaseInstance } from "../FireBase";
import request from "request-promise";



const KakaoLoginHome = () => {

    const location = useLocation();
    const history = useHistory();
    const kakaoAuthCode = qs.parse(location.search).code
    //const code = qs.parse(location.search)

    const urlParams = new URLSearchParams({
        grant_type: "authorization_code",
        client_id: "2c1780d585d8cfa407d1f83c7d948898", 
        redirect_uri: "http://localhost:5000/oauth",
        code: kakaoAuthCode
    });
    


    if (kakaoAuthCode) {
        
        console.log(`kakao page auth code = ${kakaoAuthCode}`);

        fetch(`https://kauth.kakao.com/oauth/token`, { 
            method: 'POST',
            headers: {'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'},
            body: urlParams
        })
        .then(res => res.json())
        .then(result => {
            console.log(`token : ${result.access_token}`);
            localStorage.setItem("kakaoToken", result.access_token);

            const kakaoAuth = firebaseInstance.httpsCallable('kakaoCustomAuth');
            kakaoAuth({access_token: localStorage.getItem("kakaoToken")})
            .then((result) => {
                console.log("result is = ");
                console.log(result);
        //         const kakaoToken = result.data.kakao_token;
        //         const fireToken = result.data.firebase_token;
            });
        })
    
        
    }

    return (
        <div className="home">
                        <HomeMain />
                        <HomeStatistics />
                        <HomeDetail />
                        <HomeSubscribe />
                        <HomeSample />
                    </div>
    );
}


export default KakaoLoginHome;