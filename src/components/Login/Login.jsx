import React, { useState } from "react";
import { login } from "../../features/auth/authSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState(null);

  const { username, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const dispatch = useDispatch();

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
        // Clear loginError if login is successful
        setLoginError(null);
      } catch (error) {
        // Display error message for incorrect username or password
        setLoginError("Incorrect username or password");
      }
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={onChange}
        />
        {errors.username && <p>{errors.username}</p>}
      </div>

      <div>
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={onChange}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>

      <button type="submit">Login</button>
      {loginError && <p>{loginError}</p>}
      <div>
        Don't have an account yet?
        <a href="../register">Create one now.</a>
      </div>
    </form>
  );
};

export default Login;
