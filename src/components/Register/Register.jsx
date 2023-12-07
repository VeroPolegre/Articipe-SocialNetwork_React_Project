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
    const formData = new FormData(e.target);

    if (validateForm(formData)) {
      dispatch(register(formData));
    }
  };

  return (
    <>
      <form onSubmit={onSubmit} className="form-register">
        <div>
          <input type="text" name="username" placeholder="username" />
          {errors.username && <p>{errors.username}</p>}
        </div>

        <div>
          <input type="email" name="email" placeholder="email" />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div>
          <input type="date" name="dob" placeholder="date of birth" />
          {errors.dob && <p>{errors.dob}</p>}
        </div>

        <div>
          <input
            type="file"
            name="avatar"
            accept="image/png, image/jpeg, image/jpg"
          />
        </div>

        <div>
          <input type="password" name="password" placeholder="password" />
          {errors.password && <p>{errors.password}</p>}
        </div>

        <div>
          <input
            type="password"
            name="password2"
            placeholder="confirm password"
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>

        <button type="submit">Register now</button>
      </form>
    </>
  );
};

export default Register;
