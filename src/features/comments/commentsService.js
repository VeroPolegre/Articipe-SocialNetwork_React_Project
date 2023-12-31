import axios from "axios";

const API_URL =
  "https://socialnetwork-backend-project-dev-qxbk.4.us-1.fl0.io/comments/";

const createComment = async (formData) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const res = await axios.post(API_URL + formData.postId, formData.form, {
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
