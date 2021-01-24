import React, { useState } from "react";
import { firestore, auth } from "../FireBase";

const EmailLogin = () => {

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const OnChangeEmailHandler = (event) => {
        setEmail(event.target.value)
    }
    const OnChangePasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }


    const OnButtonClick = () => {
        console.log(Email);
        console.log(Password);
        auth.signInWithEmailAndPassword(Email, Password)
        .then((user) => {
            console.log("success Login#@!");
        })
        .catch((error) => {
            console.error("Login error!", error);
            switch(error.code) {
                case "auth/invalid-email":
                    alert('유효하지 않은 메일입니다');
                    break;
                case "auth/user-disabled":
                    alert('사용이 정지된 유저 입니다.')
                    break;
                case "auth/user-not-found":
                    alert('사용자를 찾을 수 없습니다.')
                    break;
                case "auth/wrong-password":
                    alert("잘못된 패스워드 입니다.");
                    break;
            }
        });        
    }

    

    return (
        <form className="loginForm">
            <input type="email" className="idInput" onChange={OnChangeEmailHandler} placeholder="input id plz" />
            <input type="password" className="pwInput" placeholder="input pw plz" onChange={OnChangePasswordHandler} />
            <button className="inputBtn" onClick={OnButtonClick}>input and click</button>

            

        </form>

    );
}

export default EmailLogin;