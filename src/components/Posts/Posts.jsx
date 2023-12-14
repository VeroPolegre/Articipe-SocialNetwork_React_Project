import { useEffect } from "react";
import "./Posts.scss";
import { getPosts } from "../../features/posts/postsSlice";
import { useDispatch, useSelector } from "react-redux";
import Post from "../Post/Post";
import InfiniteScroll from "react-infinite-scroll-component";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const Posts = () => {
  const dispatch = useDispatch();
  const { posts, hasMorePages } = useSelector((state) => state.posts);
  let page = 1;
  let limit = 3;
  useEffect(() => {
    dispatch(getPosts({ page, limit }));
  }, [dispatch]);

  const loadMore = () => {
    if (hasMorePages) {
      dispatch(getPosts({ page: Math.ceil(posts.length / limit) + 1, limit }));
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        overflow: "hidden", // Add this line to hide overflow
      }}
    >
      <InfiniteScroll
        dataLength={posts.length}
        next={loadMore}
        hasMore={hasMorePages}
        loader={
          <div style={{ overflow: "hidden", position: "relative" }}>
            <Spin
              className="loading-spin"
              indicator={<LoadingOutlined style={{ fontSize: 120 }} spin />}
            />
          </div>
        }
        endMessage={<div>No more posts</div>}
      >
        {posts.map((post) => (
          <Post
            images={post.images}
            category={post.category}
            title={post.title}
            content={post.content}
            key={post._id}
            postId={post._id}
            username={post.userId.username}
            avatar={post.userId.avatar}
            likes={post.likes}
          />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default Posts;
