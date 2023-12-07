import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../features/auth/authSlice";
import "./Register.scss";

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
    const formData = new FormData(e.target);

    if (validateForm(formData)) {
      dispatch(register(formData));
    }
  };

  return (
    <>
      <form onSubmit={onSubmit} className="form-register">

        <label htmlFor="selectImg" className="material-symbols-outlined custom-file-upload">add_a_photo</label>
        <input
          type="file"
          name="avatar"
          accept="image/png, image/jpeg, image/jpg"
          id="selectImg"
        />

        <div className="custom-label-input">
          <label htmlFor="usernameFormRegister" className="material-symbols-outlined">person</label>
          <input type="text" name="username" placeholder="username" id="usernameFormRegister" />
          {errors.username && <p>{errors.username}</p>}
        </div>

        <div className="custom-label-input">
          <label htmlFor="emailFormRegister" className="material-symbols-outlined">email</label>
          <input type="email" name="email" placeholder="email" id="emailFormRegister" />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div className="custom-label-input">
          <label htmlFor="dobFormRegister" className="material-symbols-outlined">calendar_month</label>
          <input type="date" name="dob" placeholder="date of birth" id="dobFormRegister" />
          {errors.dob && <p>{errors.dob}</p>}
        </div>

        <div className="custom-label-input">
          <label htmlFor="passwordFormRegister" className="material-symbols-outlined">lock</label>
          <input type="password" name="password" placeholder="password" id="passwordFormRegister" />
          {errors.password && <p>{errors.password}</p>}
        </div>

        <div className="custom-label-input">
          <label htmlFor="password2FormRegister" className="material-symbols-outlined">lock</label>
          <input type="password" name="password2" placeholder="confirm password" id="password2FormRegister"/>
          {errors.password2 && <p>{errors.password2}</p>}
        </div>

        <button type="submit">Register now</button>
      </form>
    </>
  );
};

export default Register;
