import React from "react";
import "./Home.css";
import { Link, useLocation, useHistory } from "react-router-dom";
import HomeMain from "../Home/HomeMain";
import HomeStatistics from "../Home/HomeStatistics";
import HomeDetail from "../Home/HomeDetail";
import HomeSubscribe from "../Home/HomeSubscribe";
import HomeSample from "../Home/HomeSample";
import * as qs from 'query-string';
import { firebaseInstance, auth } from "../FireBase";



const KakaoLoginHome = () => {

    const { Kakao } = window;
    let kakaoToken = null;
    let fireToken = null;
    const location = useLocation();
    const history = useHistory();
    const kakaoAuthCode = qs.parse(location.search).code

    const urlParams = new URLSearchParams({
        grant_type: "authorization_code",
        client_id: "a5425f765fe84a925039fada5e2cd80c", 
        redirect_uri: "https://massive-woods-302507.web.app/oauth",
        //redirect_uri: "http://localhost:5000/oauth",
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
                console.log("Fire token is = ");
                fireToken = result.data;
                console.log(fireToken);
                
                auth.signInWithCustomToken(fireToken)
                .then((user) => {
                    console.log(user)
                    history.push("/");
                    
                    
                })
                .catch((error) => {
                    console.log(`firebase custom token auth error!!@`);
                    console.log(error.code);
                    console.log(error.message);
                })

            })
            .catch((error) => {
                console.log("error!!@!#@!");
                console.log(error);
            });
        });
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