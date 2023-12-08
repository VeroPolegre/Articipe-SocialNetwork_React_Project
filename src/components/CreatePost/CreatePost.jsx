import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { create } from "../../features/posts/postsSlice";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
	const [formData, setFormData] = useState({
		images: [],
		title: "",
		content: "",
		keywords: [],
	});

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [errors, setErrors] = useState({});

	const validateForm = (formData) => {
		const newErrors = {};

		if (!formData.get("images") || formData.get("images").size == 0) {
			newErrors.images = "Image is required";
		}

		if (!formData.get("category")) {
			newErrors.category = "Category is required";
		}

		if (!formData.get("title")) {
			newErrors.title = "Title is required";
		}

		if (!formData.get("content")) {
			newErrors.content = "Description is required";
		}

		if (!formData.get("keywords")) {
			newErrors.keywords = "Keywords are required";
		}

		setErrors(newErrors);

		return Object.keys(newErrors).length === 0;
	};

	const onChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);

		if (validateForm(formData)) {
			dispatch(create(formData));
			navigate("/");
		}
	};
	return (
		<form onSubmit={onSubmit} className="form-post">
			<div>
				<input
					type="file"
					name="images"
					onChange={onChange}
					accept="image/png, image/jpeg, image/jpg"
					multiple
				/>
				{errors.images && <p>{errors.images}</p>}
			</div>
			<div>
				<select name="category">
					<option value="">--Please pick a category--</option>
					<option value="Illustration">Illustration</option>
					<option value="Photography">Photography</option>
					<option value="Concept art">Concept art</option>
					<option value="Art direction">Art direction</option>
					<option value="Graphic design">Graphic design</option>
					<option value="Collage">Collage</option>
					<option value="AI">AI</option>
					<option value="Fashion">Fashion</option>
					<option value="UI/UX">UI/UX</option>
					<option value="Branding">Branding</option>
					<option value="Video / Film">Video / Film</option>
					<option value="Animation">Animation</option>
					<option value="3D">3D</option>
				</select>{errors.category && <p>{errors.category}</p>}
			</div>
			<div>
				<input
					type="text"
					name="title"
					onChange={onChange}
					placeholder="title"
				/>
				{errors.title && <p>{errors.title}</p>}
			</div>
			<div>
				<textarea
					type="text"
					name="content"
					onChange={onChange}
					placeholder="description"
				/>
				{errors.content && <p>{errors.content}</p>}
			</div>
			<div>
				<textarea
					type="text"
					name="keywords"
					onChange={onChange}
					placeholder="keywords"
				/>
				{errors.keywords && <p>{errors.keywords}</p>}
			</div>
			<button type="submit">Create Post</button>
		</form>
	);
};

export default CreatePost;
