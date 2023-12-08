import axios from "axios";

const API_URL = "http://localhost:8080/posts";
const token = JSON.parse(localStorage.getItem("token"));

const createPost = async (formData) => {
	const res = await axios.post(API_URL, formData, {
		headers: {
			Authorization: token,
		},
	});
	return res.data;
};

const getPosts = async () => {
	const res = await axios.get(API_URL);
	return res.data;
};

const getPostById = async (_id) => {
	const res = await axios.get(API_URL + _id);
	return res.data;
};

const getPostByTitle = async (title) => {
	const res = await axios.get(API_URL + "/title/" + title);
	return res.data;
};

const postsService = {
	createPost,
	getPosts,
	getPostById,
	getPostByTitle,
};

export default postsService;
