import React, { useEffect } from "react";
import { getPosts } from "../../features/posts/postsSlice";
import { useDispatch, useSelector } from "react-redux";
import Post from "../Post/Post";


const Posts = () => {
  const dispatch = useDispatch();

  const { posts } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const post = posts.map((post) => {

    return (
      <Post
        images={post.images}
        category={post.category}
        title={post.title}
        content={post.content}
        key={post._id}
        postId={post._id}
        username={post.userId?.username}
        avatar={post.userId?.avatar}
        likes={post.likes}
      />
    );
  });

  return <main>{post}</main>;
};

export default Posts;
