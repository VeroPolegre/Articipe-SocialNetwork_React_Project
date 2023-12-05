import React, { useState } from "react";
import { login } from "../../features/auth/authSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="username"
        placeholder="username"
        value={username}
        onChange={onChange}
      />

      <input
        type="password"
        name="password"
        placeholder="password"
        value={password}
        onChange={onChange}
      />

      <button type="submit">Login</button>
      <div>
        Don't have an account yet?
        <a href="../register">Create one now.</a>
      </div>
    </form>
  );
};

export default Login;
