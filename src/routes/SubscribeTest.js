import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { firebaseInstance } from "../FireBase";
import { isMobile } from "react-device-detect";

const SubscribeTest = () => {

    const history = useHistory();
    const [coffeeType, setCoffeeType] = useState("coffeeBeans");
    const [beansPrice, setBeansPrice] = useState(22000);
    const [beansQuantitiy, setbeansQuantitiy] = useState(2);
    const [flavorType, setBeansType] = useState("sour");
    const [grindingDegree, setGrindingDegree] = useState("handDreep");

    const onClickPayment = () => {
        const kakaoPayRequest = firebaseInstance.httpsCallable("kakaoPayRequest");
    
        kakaoPayRequest({
            orderId: "testOrderId",
            uid: "testUid",
            coffeeType: coffeeType,
            beansQuantity: beansQuantitiy,
            beansPrice: beansPrice,
        })
        .then(res => {
            console.log(res);
            isMobile ? window.open(res.data.next_redirect_mobile_url) 
            : window.open(res.data.next_redirect_pc_url);
        })
        .catch((error) => {
            console.log("client receive pay error!" + error);
        });
    }

    

    
    return (
        <div> This is Subscribe TestPage
            <button onClick={onClickPayment}> kakaoPay btn</button>
            <div>
                test page#@!
            </div>
        </div>
    );

}

export default SubscribeTest;