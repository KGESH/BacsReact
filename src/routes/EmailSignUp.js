import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { auth, database, firestore } from "../FireBase";
import { writeUserData } from "../CreateUserData";

const EmailSignUp = () => {
  const history = useHistory();

  const [UserId, setId] = useState("");
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Address, setAddress] = useState("");
  const [Age, setAge] = useState("");

  const OnChangeIdHandler = (event) => {
    setId(event.target.value.trim());
  };

  const OnChangeNameHandler = (event) => {
    setName(event.target.value.trim());
  };
  const OnChangeEmailHandler = (event) => {
    setEmail(event.target.value.trim());
  };
  const OnChangePasswordHandler = (event) => {
    setPassword(event.target.value.trim());
  };

  const OnChangeAddressHandler = (event) => {
    setAddress(event.target.value.trim());
  };

  const OnChangeAgeHandler = (event) => {
    setAge(event.target.value.trim());
  };

  const OnSignUpButtonClick = (event) => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(Email, Password)
      .then((user) => {
        console.log("sign up success!");
        writeUserData({
          userId: UserId,
          name: Name,
          email: Email,
          phoneNumber: "010-5318-4949",
          age: Age,
          address: Address,
        });
        history.push("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  return (
    <form className="login_form">
      <input className="id_input" onChange={OnChangeIdHandler} placeholder="input id plz" />
      <input type="password" className="password_input" onChange={OnChangePasswordHandler} placeholder="input pw plz" />
      <input
        type="password"
        className="password_confirm_input"
        onChange={OnChangePasswordHandler}
        placeholder="confirm pw plz"
      />
      <input className="name_input" onChange={OnChangeNameHandler} placeholder="input Name plz" />
      <input type="email" className="email_input" onChange={OnChangeEmailHandler} placeholder="input email plz" />
      <button className="input_button" onClick={OnSignUpButtonClick}>
        sign up
      </button>
    </form>
  );
};

export default EmailSignUp;
