import { useState } from "react";
import "./SearchBar.scss";
import { useDispatch } from "react-redux";
import { getPostsByKeywords } from "../../features/posts/postsSlice";

const SearchBar = () => {
	const [keywords, setKeywords] = useState("");
	const dispatch = useDispatch();

	const handleChange = (e) => {
		setKeywords(e.target.value);
	};

	const handleKeyDown = (e) => {
		e.preventDefault();
		if (e.key === "Enter") {
			const keywordsArray = keywords
				.split(", ")
				.map((keyword) => keyword.trim());
			dispatch(getPostsByKeywords(keywordsArray));
			setKeywords("");
		}
	};

	return (
		<>
			<form className="searchBarNav">
				<div className="custom-label-input">
					<label
						htmlFor="searchInput"
						className="material-symbols-outlined label-icon">
						search
					</label>
					<input
						type="text"
						name="keywords"
						value={keywords}
						onChange={handleChange}
						onKeyDown={handleKeyDown}
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
