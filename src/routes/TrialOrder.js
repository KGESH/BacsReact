import { map } from "lodash";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { firebaseInstance } from "../FireBase"
import { isMobile } from "react-device-detect";



const TrialOrder = (props) => {
    const location = useLocation();
    const orderData = location.state;
    const [coffeeType, setCoffeeType] = useState(orderData.coffeeType);
    const [beansQuantity, setbeansQuantity] = useState(orderData.quantity);
    const [beansPrice, setBeansPrice] = useState(orderData.beansPrice);

    const onClickPayment = () => {
        const kakaoPayRequest = firebaseInstance.httpsCallable("kakaoPayRequest");
        
        kakaoPayRequest({
            orderId: "testOrderId",
            uid: "testUid",
            coffeeType: coffeeType,
            beansQuantity: beansQuantity,
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

    const showData = () => {
        console.log("show order data");
        console.log(orderData);
    }

    return (
        <>
            <div>구독 결제 페이지</div>
            <div>커피 타입 : {coffeeType}</div>
            <div>양 : {beansQuantity}</div>
            <button onClick={onClickPayment}> 결제하기</button>

            {showData()}
        </>
    )
}


export default TrialOrder;
