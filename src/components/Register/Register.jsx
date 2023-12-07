import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../features/auth/authSlice";

const Register = () => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});

  const validateForm = (formData) => {
    const newErrors = {};

    if (!formData.get("username").trim()) {
      newErrors.username = "Username is required";
    }

    if (!formData.get("email").trim()) {
      newErrors.email = "Email is required";
    }

    if (!formData.get("dob").trim()) {
      newErrors.dob = "Date of birth is required";
    }

    if (!formData.get("password").trim()) {
      newErrors.password = "Password is required";
    }

    if (formData.get("password").trim() !== formData.get("password2").trim()) {
      newErrors.password2 = "Passwords do not match";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (e.target.avatar.files[0])
      formData.set("avatar", e.target.avatar.files[0]);
    formData.set("username", e.target.username.value);
    formData.set("email", e.target.email.value);
    formData.set("dob", e.target.dob.value);
    formData.set("password", e.target.password.value);
    formData.set("password2", e.target.password2.value);
    dispatch(register(formData));
  };

  return (
    <>
      <form onSubmit={onSubmit} className="form-register">
        <input type="text" name="username" placeholder="username" />
        <input type="email" name="email" placeholder="email" />
        <input type="date" name="dob" placeholder="date of birth" />
        <input
          type="file"
          name="avatar"
          accept="image/png, image/jpeg, image/jpg"
        />
        <input type="password" name="password" placeholder="password" />
        <input
          type="password"
          name="password2"
          placeholder="confirm password"
        />
        <button type="submit">Register now</button>
      </form>
    </>
  );
};

export default Register;
