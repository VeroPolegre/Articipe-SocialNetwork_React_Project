import axios from "axios";

const API_URL =
  "https://socialnetwork-backend-project-dev-qxbk.4.us-1.fl0.io/users";

const register = async (userData) => {
  const res = await axios.post(API_URL + "/register", userData);
  return res.data;
};

const login = async (userData) => {
  const res = await axios.post(API_URL + "/login", userData);
  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data.user));
    localStorage.setItem("token", JSON.stringify(res.data.token));
  }
  return res.data;
};

const logout = async () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const res = await axios.delete(API_URL + "/logout", {
    headers: {
      Authorization: token,
    },
  });
  if (res.data) {
    localStorage.clear();
  }
  return res.data;
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
