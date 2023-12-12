import axios from "axios";

const API_URL = "http://localhost:8080/comments/";

const createComment = async (formData) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const res = await axios.post(API_URL + postId, formData, {
    headers: {
      Authorization: token,
    },
  });
  return res.data;
};

const getComments = async (postId) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const res = await axios.get(API_URL + postId, {
    headers: {
      Authorization: token,
    },
  });
  return res.data;
};

const deleteComment = async (commentId) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const res = await axios.delete(API_URL + commentId, {
    headers: {
      Authorization: token,
    },
  });
  console.log(res.data);
  return res.data;
};

const likeComment = async (commentId) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const res = await axios.put(
    API_URL + "/like/" + commentId,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );
  return res.data;
};

const unlikeComment = async (commentId) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const res = await axios.put(
    API_URL + "unlike/" + commentId,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );
  return res.data;
};

const commentsService = {
  createComment,
  getComments,
  deleteComment,
  likeComment,
  unlikeComment,
};

export default commentsService;
