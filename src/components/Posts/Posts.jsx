import React, {useEffect} from "react";
import {getPosts} from "../../features/posts/postsSlice";
import {useDispatch, useSelector} from "react-redux";
import Post from "../Post/Post";

const Posts = () => {
    const dispatch = useDispatch();

    const {posts} = useSelector((state) => state.posts);
    console.log(posts);

    useEffect(() => {
        dispatch(getPosts());
    }, []);

    const post = posts.map((post) => {

        return <Post 
        title={post.title} 
        content={post.content}
        images={post.images[0]}
        key={post._id}
        username={post.userId.username}
        />
    });

    return (
        <main>
            {post}
        </main>
    );
};

export default Posts;