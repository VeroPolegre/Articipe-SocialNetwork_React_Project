import axios from "axios";

const API_URL = "http://localhost:8080/posts";

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
	getPosts,
	getPostById,
	getPostByTitle,
};

export default postsService;
