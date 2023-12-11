import React, { useState } from "react";

const Search = () => {
	const [text, setText] = useState("");
	const handleChange = (e) => {
		setText(e.target.value);
		if (e.key === "Enter") {
			console.log(text);
		}
	};

	return (
		<>
			<input
				onKeyUp={handleChange}
				placeholder="Search for images"
				name="text"
			/>
		</>
	);
};

export default Search;
