import { AddAlarmOutlined } from '@material-ui/icons';
import React, { useState } from "react";
import { firestore, auth, fireAdmin} from "../FireBase";



const EmailLogin = () => {

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

    const googleProvider = () => auth.GoogleAuthProvider();





    const OnButtonClick = () => {
        console.log(Name);
        console.log(Email);
        console.log(Password);

        auth.signInWithPopup(googleProvider);

        auth.signInWithPopup(googleProvider)
        .then((result) => {
            const token = result.credntial.accessToken;
            const user = result.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credntial = error.credntial;
        });

        

        // fireAdmin
        // .auth()
        // .createUser({
        //     email: "adminTest@test.com",
        //     emailVerified: false,
        //     phoneNumber: "+821053184958",
        //     displayName: "Test Jee",
        //     disabled: false,
        // })
        // .then((userRecord) => {
        //     console.log("success created new user!", userRecord.uid);
        // })
        // .catch((error) => {
        //     console.log("error creating new user", error);
        // });
        


        // auth.signInWithEmailAndPassword(Email, Password)
        // .then((user) => {
        //     console.log("success Login#@!");
        // })
        // .catch((error) => {
        //     console.error("Login error!", error);
        //     switch(error.code) {
        //         case "auth/invalid-email":
        //             alert('유효하지 않은 메일입니다');
        //             break;
        //         case "auth/user-disabled":
        //             alert('사용이 정지된 유저 입니다.')
        //             break;
        //         case "auth/user-not-found":
        //             alert('사용자를 찾을 수 없습니다.')
        //             break;
        //         case "auth/wrong-password":
        //             alert("잘못된 패스워드 입니다.");
        //             break;
        //     }
        // });        
    }

    

    return (
        <form className="loginForm">
            <input className="nameInput" onChange={OnChangeNameHandler} placeholder="input Name plz"/>
            <input type="email" className="idInput" onChange={OnChangeEmailHandler} placeholder="input id plz" />
            <input type="password" className="pwInput" placeholder="input pw plz" onChange={OnChangePasswordHandler} />
            <button className="inputBtn" onClick={OnButtonClick}>sign up</button>

            

        </form>

    );
}

export default EmailLogin;