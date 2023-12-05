import "./Register.scss";
import { useDispatch } from "react-redux";
import { register } from "../../features/auth/authSlice";

const Register = () => {
  const dispatch = useDispatch();

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
      <form onSubmit={onSubmit}>
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
