import React from "react";

const KakaoLogin = () => {
    return (
        <head>
            <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
            <script>Kakao.init("1b080fda72ac152ebeeea5ad36adad42");</script>
        </head>
    );
}

export default KakaoLogin;