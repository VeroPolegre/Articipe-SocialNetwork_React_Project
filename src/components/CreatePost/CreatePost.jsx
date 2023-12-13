import { useState } from "react";
import { useDispatch } from "react-redux";
import { create } from "../../features/posts/postsSlice";
import { Modal, Button, Input } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const CreatePost = ({ visible, onCancel }) => {
	const [formData, setFormData] = useState({
		images: [],
		title: "",
		content: "",
		category: "",
		keywords: [],
	});

	const navigate = useNavigate();
	const dispatch = useDispatch();
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
			onCancel();
			navigate("/");
		}
	};

	return (
		<Modal
			open={visible}
			onCancel={onCancel}
			footer={null}
			width={600}
			className="create-post-modal">
			<form onSubmit={onSubmit}>
				<div className="ant-modal-header">
					<h3>Create New Post</h3>
				</div>
				<div className="ant-modal-body">
					<div className="image-upload-column">
						<Input
							type="file"
							name="images"
							accept="image/png, image/jpeg, image/jpg"
							multiple
							onChange={onChange}
						/>
						{errors.images && <p>{errors.images}</p>}
					</div>
					<div className="details-column">
						<div className="ant-form-item">
							<label className="material-symbols-outlined">category</label>
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
							</select>
							{errors.category && <p>{errors.category}</p>}
						</div>
						<div className="ant-form-item">
							<label className="material-symbols-outlined">title</label>
							<Input
								type="text"
								name="title"
								onChange={onChange}
								placeholder="Title"
							/>
							{errors.title && <p>{errors.title}</p>}
						</div>
						<div className="ant-form-item">
							<label className="material-symbols-outlined">description</label>
							<Input.TextArea
								type="text"
								name="content"
								onChange={onChange}
								placeholder="Description"
							/>
							{errors.content && <p>{errors.content}</p>}
						</div>
						<div className="ant-form-item">
							<label className="material-symbols-outlined">label</label>
							<Input.TextArea
								type="text"
								name="keywords"
								onChange={onChange}
								placeholder="Keywords"
							/>
							{errors.keywords && <p>{errors.keywords}</p>}
						</div>
					</div>
				</div>
				<div className="create-post-actions">
					<Button onClick={onCancel}>Close</Button>
					<Button type="primary" htmlType="submit">
						Share
					</Button>
				</div>
			</form>
		</Modal>
	);
};

export default CreatePost;
