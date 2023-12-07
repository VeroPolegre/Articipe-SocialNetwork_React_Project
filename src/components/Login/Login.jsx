import React, { useState } from "react";
import { login } from "../../features/auth/authSlice";
import { useDispatch } from "react-redux";
import "./Login.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState(null);
  const { username, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {};

    if (!username.trim()) {
      errors.username = "Username is required";
    }

    if (!password.trim()) {
      errors.password = "Password is required";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        await dispatch(login(formData));
        navigate("/");
        setLoginError(null);
      } catch (error) {
        setLoginError("Incorrect username or password");
      }
    }
  };

  return (
    <form onSubmit={onSubmit} className="form-register">
      <div className="custom-label-input">
        <label
          htmlFor="usernameFormLogin"
          className="material-symbols-outlined"
        >
          person
        </label>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={onChange}
          id="usernameFormLogin"
        />
        {errors.username && <p>{errors.username}</p>}
      </div>

      <div className="custom-label-input">
        <label
          htmlFor="passwordFormLogin"
          className="material-symbols-outlined"
        >
          lock
        </label>
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={onChange}
          id="passwordFormLogin"
        />
        {errors.password && <p>{errors.password}</p>}
      </div>

      <button type="submit">Login</button>

      {loginError && <p>{loginError}</p>}

      <p>
        Don't have an account yet?<br></br>
        <a href="../register">Create one now.</a>
      </p>
    </form>
  );
};

export default Login;
