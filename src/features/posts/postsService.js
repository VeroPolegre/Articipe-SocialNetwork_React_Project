import axios from "axios";

const API_URL =
  "https://socialnetwork-backend-project-dev-qxbk.4.us-1.fl0.io/posts";
const token = JSON.parse(localStorage.getItem("token"));

const createPost = async (formData) => {
  const res = await axios.post(API_URL, formData, {
    headers: {
      Authorization: token,
    },
  });
  return res.data;
};

const getPosts = async ({ page, limit }) => {
  const response = await axios.get(`${API_URL}?page=${page}&limit=${limit}`);
  return response.data;
};

const getFollowingPosts = async () => {
  const res = await axios.get(`${API_URL}` + "/followingPosts/", {
    headers: {
      Authorization: token,
    },
  });
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

const like = async (_id) => {
  const token = JSON.parse(localStorage.getItem("token"));

  const res = await axios.put(
    API_URL + "/like/" + _id,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );

  return res.data;
};
const unlike = async (_id) => {
  const token = JSON.parse(localStorage.getItem("token"));

  const res = await axios.put(
    API_URL + "/unlike/" + _id,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );

  return res.data;
};

const getPostsByKeywords = async (keywords) => {
  const res = await axios.get(`${API_URL}/explore?keywords=${keywords}`);
  return res.data;
};

const postsService = {
  createPost,
  getPosts,
  getPostById,
  getPostByTitle,
  getPostsByKeywords,
  like,
  unlike,
  getFollowingPosts,
};

export default postsService;
