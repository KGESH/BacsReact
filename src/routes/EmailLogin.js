import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { firestore, auth, database } from "../FireBase";



const EmailLogin = () => {

    const history = useHistory();

    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const OnChangeNameHandler = (event) => {
        setName(event.target.value)
    }
    const OnChangeEmailHandler = (event) => {
        setEmail(event.target.value)
    }
    const OnChangePasswordHandler = (event) => {
        setPassword(event.target.value)
    }


    const writeUserData = (userId, name, email) => {
        database.ref("users/" + userId).set({
            username: name,
            email: email,
        });
    }



    const OnLoginClick = () => {
        console.log("login clicked");
        auth.signInWithEmailAndPassword(Email, Password)
        .then((user) => {
            console.log(Email);
            console.log(Password);
            console.log("Login success!");
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
        })
        
    }


    const OnButtonClick = () => {
        console.log(Name);
        console.log(Email);
        console.log(Password);

        auth.createUserWithEmailAndPassword(Email, Password)
        .then((user) => {
            console.log(Email);
            console.log(Password);
            console.log("singup success!");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log(errorCode);
            console.log(errorMessage);
        })


        writeUserData("DB_TEST", Name,Email);

    }

    

    return (
        <form className="loginForm">
            <input className="nameInput" onChange={OnChangeNameHandler} placeholder="input Name plz"/>
            <input type="email" className="idInput" onChange={OnChangeEmailHandler} placeholder="input id plz" />
            <input type="password" className="pwInput" placeholder="input pw plz" onChange={OnChangePasswordHandler} />
            <button className="inputBtn" onClick={OnButtonClick}>sign up</button>
            <button className="inputBtn" onClick={OnLoginClick}>Login</button>


        </form>

    );
}

export default EmailLogin;