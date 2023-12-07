import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, reset } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = formData;
  const { isSuccess, message, isError } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState(null);

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
    if (isError) {
      setLoginError("Incorrect username or password");
    }
    dispatch(reset());
  }, [isSuccess, message, isError]);

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (!username) {
      validationErrors.username = "Username is required";
    }
    if (!password) {
      validationErrors.password = "Password is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoginError(null);
    dispatch(login(formData));
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
