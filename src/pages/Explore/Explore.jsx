import React from "react";
import Header from "../../components/Header/header";
import PostGrid from "../../components/PostGrid/PostGrid";
import SearchBar from "../../components/SearchBar/SearchBar";

const Explore = () => {
	return (
		<React.Fragment>
			<Header />
			<SearchBar />
			<PostGrid />
		</React.Fragment>
	);
};

export default Explore;
