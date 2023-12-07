import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../features/auth/authSlice";
import "./Register.scss";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const [validationErrors, setValidationErrors] = useState({});
  const [backendErrors, setBackendErrors] = useState([]);
  const navigate = useNavigate();

  const validateForm = (formData) => {
    const errors = {};
    if (!formData.get("username").trim()) {
      errors.username = "Username is required";
    }
    const email = formData.get("email").trim();
    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email address";
    }
    if (!formData.get("dob")) {
      errors.dob = "Date of birth is required";
    }
    const password = formData.get("password").trim();
    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }
    const password2 = formData.get("password2").trim();
    if (password !== password2) {
      errors.password2 = "Passwords do not match";
    }
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    if (validateForm(formData)) {
      try {
        await dispatch(register(formData));
        navigate("/");
      } catch (error) {
        if (error.response && error.response.status === 400) {
          setBackendErrors(error.response.data.errors);
        } else {
          console.error("Registration failed:", error.message);
        }
      }
    }
  };
  return (
    <>
      <form onSubmit={onSubmit} className="form-register">
        <label
          htmlFor="selectImg"
          className="material-symbols-outlined custom-file-upload"
        >
          add_a_photo
        </label>
        <input
          type="file"
          name="avatar"
          accept="image/png, image/jpeg, image/jpg"
          id="selectImg"
          className="file-input"
        />

        <div className="custom-label-input">
          <label
            htmlFor="usernameFormRegister"
            className="material-symbols-outlined label-icon"
          >
            person
          </label>
          <input
            type="text"
            name="username"
            placeholder="username"
            id="usernameFormRegister"
            className="text-input"
          />
          {validationErrors.username && (
            <p className="error-message">{validationErrors.username}</p>
          )}
        </div>

        <div className="custom-label-input">
          <label
            htmlFor="emailFormRegister"
            className="material-symbols-outlined label-icon"
          >
            email
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            id="emailFormRegister"
            className="text-input"
          />
          {validationErrors.email && (
            <p className="error-message">{validationErrors.email}</p>
          )}
        </div>

        <div className="custom-label-input">
          <label
            htmlFor="dobFormRegister"
            className="material-symbols-outlined label-icon"
          >
            calendar_month
          </label>
          <input
            type="date"
            name="dob"
            placeholder="date of birth"
            id="dobFormRegister"
            className="date-input"
          />
          {validationErrors.dob && (
            <p className="error-message">{validationErrors.dob}</p>
          )}
        </div>

        <div className="custom-label-input">
          <label
            htmlFor="passwordFormRegister"
            className="material-symbols-outlined label-icon"
          >
            lock
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            id="passwordFormRegister"
            className="password-input"
          />
          {validationErrors.password && (
            <p className="error-message">{validationErrors.password}</p>
          )}
        </div>

        <div className="custom-label-input">
          <label
            htmlFor="password2FormRegister"
            className="material-symbols-outlined label-icon"
          >
            lock
          </label>
          <input
            type="password"
            name="password2"
            placeholder="confirm password"
            id="password2FormRegister"
            className="password-input"
          />
          {validationErrors.password2 && (
            <p className="error-message">{validationErrors.password2}</p>
          )}
        </div>

        {backendErrors.length > 0 && (
          <div className="backend-error-container">
            {backendErrors.map((error, index) => (
              <p key={index} className="backend-error-message">
                {error}
              </p>
            ))}
          </div>
        )}

        <button type="submit" className="submit-button">
          Register now
        </button>
      </form>
    </>
  );
};

export default Register;
