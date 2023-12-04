import React, { useState } from "react";
import "./Register.scss";
import { useDispatch } from "react-redux";
import { register } from "../../features/auth/authSlice";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    dob: "",
    avatar: "",
    password: "",
    password2: "",
  });

  const { username, email, dob, avatar, password, password2 } = formData;
  const dispatch = useDispatch();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(register(formData));
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={onChange}
          placeholder="username"
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={onChange}
          placeholder="email"
        />
        <input
          type="date"
          name="dob"
          value={dob}
          onChange={onChange}
          placeholder="date of birth"
        />
        <input
          type="file"
          name="avatar"
          value={avatar}
          onChange={onChange}
          accept="image/png, image/jpeg, image/jpg"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          placeholder="password"
        />
        <input
          type="password"
          name="password2"
          value={password2}
          onChange={onChange}
          placeholder="confirm password"
        />
        <button type="submit">Register now</button>
      </form>
    </>
  );
};

export default Register;
