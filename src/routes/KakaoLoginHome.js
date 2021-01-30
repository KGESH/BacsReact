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


// const GetKakaoToken = (kakaoAuthCode) => {
//     console.log(`Get Kakao Token. Code :`);
//     console.log(kakaoAuthCode);
//     return request({
//         method: 'POST',
//         headers: {"Content-type": "application/x-www-form-urlencoded;charset=utf-8", "grant_type": "authorization_code", "client_id": "2c1780d585d8cfa407d1f83c7d948898", "redirect_uri": "http://localhost:3000/oauth", "code": kakaoAuthCode},

//     })
    
// }

const KakaoLoginHome = () => {

    const location = useLocation();
    const history = useHistory();
    //const code = qs.parse(location.search)
    const kakaoAuthCode = qs.parse(location.search).code

    const urlParams = new URLSearchParams({
        'grant_type': "authorization_code",
        'client_id': "2c1780d585d8cfa407d1f83c7d948898", 
        'redirect_uri': "http://localhost:3000/oauth",
        'code': kakaoAuthCode
    });
    


    if (kakaoAuthCode) {
        
        console.log(`kakao page auth code = ${kakaoAuthCode}`);

        fetch(`https://kauth.kakao.com/oauth/token`, { 
            method: 'POST',
            headers: {'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'},
            body: urlParams
        })
        .then(res => {
            console.log("token value is ===");
            const token = res.json().access_token;
            console.log(token);
            //console.log(token.PromiseResult);
            //localStorage.setItem("kakaoToken",res.body.access_token);
        })
    
        
        // const kakaoAuth = firebaseInstance.httpsCallable(GetKakaoToken(kakaoAuthCode));
        // kakaoAuth({code: kakaoAuth})
        // .then((result) => {
        //     console.log(result);


            // const kakaoToken = result.data.kakao_token;
            // const fireToken = result.data.firebase_token;
       // })

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