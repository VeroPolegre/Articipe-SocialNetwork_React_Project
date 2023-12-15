import { useState } from "react";
import Header from "../../components/Header/Header";
import PostGrid from "../../components/PostGrid/PostGrid";
import SearchBar from "../../components/SearchBar/SearchBar";
import UserGrid from "../../components/UserGrid/UserGrid";
import { useSelector } from "react-redux";

const Explore = () => {
  const [searchType, setSearchType] = useState("post");

  const handleSearchTypeChange = (type) => {
    setSearchType(type);
  };
  const posts = useSelector((state) => state.posts.posts);
  const users = useSelector((state) => state.user.searchedUsers);

  return (
    <>
      <Header
        onSearchTypeChange={handleSearchTypeChange}
        searchType={searchType}
      />
      <SearchBar
        onSearchTypeChange={handleSearchTypeChange}
        searchType={searchType}
      />
      <>
        {searchType === "post" && <PostGrid posts={posts} />}
        {searchType === "user" && <UserGrid users={users} />}
      </>
    </>
  );
};

export default Explore;
