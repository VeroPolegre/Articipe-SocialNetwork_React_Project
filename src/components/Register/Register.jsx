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
        </div>

        <div className="custom-label-input">
          <label htmlFor="emailFormRegister" className="material-symbols-outlined">email</label>
          <input type="email" name="email" placeholder="email" id="emailFormRegister" />
        </div>

        <div className="custom-label-input">
          <label htmlFor="dobFormRegister" className="material-symbols-outlined">calendar_month</label>
          <input type="date" name="dob" placeholder="date of birth" id="dobFormRegister" />
        </div>

        <div className="custom-label-input">
          <label htmlFor="passwordFormRegister" className="material-symbols-outlined">lock</label>
          <input type="password" name="password" placeholder="password" id="passwordFormRegister" />
        </div>

        <div className="custom-label-input">
          <label htmlFor="password2FormRegister" className="material-symbols-outlined">lock</label>
          <input
            type="password"
            name="password2"
            placeholder="confirm password"
            id="password2FormRegister"
          />
        </div>

        <button type="submit">Register now</button>
      </form>
    </>
  );
};

export default Register;
