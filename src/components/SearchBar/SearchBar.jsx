import { useState } from "react";
import "./SearchBar.scss";
import { useDispatch } from "react-redux";
import { getPostsByKeywords } from "../../features/posts/postsSlice";
import { getUsersByName } from "../../features/user/userSlice";

const SearchBar = () => {
  const [keywords, setKeywords] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setKeywords(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const keywordsArray = keywords.split(", ").map((keyword) => keyword.trim());
    dispatch(getPostsByKeywords(keywordsArray));
    dispatch(getUsersByName(keywordsArray));
    setKeywords("");
  };

  return (
    <>
      <form className="searchBarNav" onSubmit={handleSubmit}>
        <div className="custom-label-input">
          <label
            htmlFor="searchInput"
            className="material-symbols-outlined label-icon"
          >
            search
          </label>
          <input
            type="text"
            name="keywords"
            value={keywords}
            onChange={handleChange}
            placeholder="Search"
            id="searchInput"
            className="text-input"
          />
        </div>
      </form>
    </>
  );
};

export default SearchBar;
