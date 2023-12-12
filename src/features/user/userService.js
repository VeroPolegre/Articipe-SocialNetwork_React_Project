import axios from "axios";

const API_URL = "http://localhost:8080/users";
const token = JSON.parse(localStorage.getItem("token"));

const getLoggedUser = async() => {
    const res = await axios.get(API_URL + "/profile", {
		headers: {
			Authorization: token,
		},
	});
	return res.data;
};

const userService = {
	getLoggedUser
};

export default userService;
