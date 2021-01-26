import React, { useState } from "react";
import { auth, database } from "../FireBase";

const EmailSignUp = () => {
    
    const [UserId, setId] = useState("");
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [Address, setAddress] = useState("");
    const [Age, setAge] = useState("");

    const OnChangeIdHandler = (event) => {
        setId(event.target.value.trim())
    }

    const OnChangeNameHandler = (event) => {
        setName(event.target.value.trim())
    }
    const OnChangeEmailHandler = (event) => {
        setEmail(event.target.value.trim())
    }
    const OnChangePasswordHandler = (event) => {
        setPassword(event.target.value.trim())
    }

    const OnChangeAddressHandler = (event) => {
        setAddress(event.target.value.trim());
    }

    const OnChangeAgeHandler = (event) => {
        setAge(event.target.value.trim());
    }


    const writeUserData = (userId, email, name, mainAddress , subAddress) => {
        database.ref("users/" + userId).set({
            userName: name,
            email: email,
            userId: userId,
            address: {"main" : mainAddress, "sub": subAddress},
            cart: {},
            subscribe: {},
        });
    }

    const OnSignUpButtonClick = (event) => {

        event.preventDefault();
        
        auth.createUserWithEmailAndPassword(Email, Password)
        .then((user) => {
            console.log(UserId);
            console.log(Name);
            console.log(Email);
            console.log(Password);
            console.log(Age);
            console.log(Address);

            console.log("sign up success!");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log(errorCode);
            console.log(errorMessage);
        })

        writeUserData(UserId, Email, Name, "seoul", "misung122");
    }

    return (
        <form className="loginForm">
            <input className="idInput" onChange={OnChangeIdHandler} placeholder="input id plz"/>
            <input type="password" className="passwordInput" onChange={OnChangePasswordHandler} placeholder="input pw plz"/>
            <input type="password" className="passwordConfirmInput" onChange={OnChangePasswordHandler} placeholder="confirm pw plz"/>
            <input className="nameInput" onChange={OnChangeNameHandler} placeholder="input Name plz"/>
            <input type="email" className="emailInput" onChange={OnChangeEmailHandler} placeholder="input email plz" />
            <button className="inputBtn" onClick={OnSignUpButtonClick}>sign up</button>
        </form>

    );

}

export default EmailSignUp;