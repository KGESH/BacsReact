import React from "react";
import "./Home.css";
import { Link, useLocation } from "react-router-dom";
import HomeMain from "../Home/HomeMain";
import HomeStatistics from "../Home/HomeStatistics";
import HomeDetail from "../Home/HomeDetail";
import HomeSubscribe from "../Home/HomeSubscribe";
import HomeSample from "../Home/HomeSample";
import * as qs from 'query-string';
import {firebaseInstance} from "../FireBase";



const KakaoLoginHome = () => {

    const location = useLocation();
    const code = qs.parse(location.search)
    const kakaoAuthCode = code;

    if (kakaoAuthCode) {
        console.log(`kakao page token -=-${kakaoAuthCode.code}`);

        const kakaoAuth = firebaseInstance.functions().httpsCallable('kakaoCustomAuth');
        kakaoAuth({code: kakaoAuthCode})
        .then((result) => {
            console.log(result);


            // const kakaoToken = result.data.kakao_token;
            // const fireToken = result.data.firebase_token;
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