import { useEffect } from "react";
import { getPosts } from "../../features/posts/postsSlice";
import { useDispatch, useSelector } from "react-redux";
import Post from "../Post/Post";
import InfiniteScroll from "react-infinite-scroll-component";

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
		<div>
			<InfiniteScroll
				dataLength={posts.length}
				next={loadMore}
				hasMore={hasMorePages}
				loader={<h4>Loading...</h4>}
				endMessage={<div>No more posts</div>}>
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
