import axios from "axios";

const API_URL = "http://localhost:8080/users";
const getLoggedUser = async () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const res = await axios.get(API_URL + "/profile", {
    headers: {
      Authorization: token,
    },
  });
  return res.data;
};

const getUsersByName = async (name) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const res = await axios.get(API_URL + "/name/" + name, {
    headers: {
      Authorization: token,
    },
  });
  return res.data;
};

const userService = {
  getLoggedUser,
  getUsersByName,
};

export default userService;
