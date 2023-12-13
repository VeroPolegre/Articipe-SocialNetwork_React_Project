import React, { useState } from "react";
import Header from "../../components/Header/header";
import PostGrid from "../../components/PostGrid/PostGrid";
import SearchBar from "../../components/SearchBar/SearchBar";
import UserGrid from "../../components/UserGrid/UserGrid";

const Explore = () => {
  const [searchType, setSearchType] = useState("post");
  const handleSearchTypeChange = (type) => {
    setSearchType(type);
  };

  return (
    <React.Fragment>
      <Header />
      <SearchBar onSearchTypeChange={handleSearchTypeChange} />
      <main className="explore-main">
        {searchType === "post" && <PostGrid />}
        {searchType === "user" && <UserGrid />}
      </main>
    </React.Fragment>
  );
};

export default Explore;
