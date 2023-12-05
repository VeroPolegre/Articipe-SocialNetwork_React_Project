import React from "react";
import "./SignUp.scss";
import Register from "../../components/Register/Register";
import Login from "../../components/Login/Login";

const SignUp = () => {
  return (
    <>
      <h1>Join our community!</h1>
      <Register />
      <Login />
    </>
  );
};

export default SignUp;
