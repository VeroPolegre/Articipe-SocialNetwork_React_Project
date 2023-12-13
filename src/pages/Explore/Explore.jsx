import React from "react";
import Header from "../../components/Header/header";
import PostGrid from "../../components/PostGrid/PostGrid";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useSelector } from "react-redux";

const Explore = () => {

	const { posts } = useSelector((state) => state.posts);

	return (
		<React.Fragment>
			<Header />
			<SearchBar />
			<PostGrid posts={posts}/>
		</React.Fragment>
	);
};

export default Explore;
