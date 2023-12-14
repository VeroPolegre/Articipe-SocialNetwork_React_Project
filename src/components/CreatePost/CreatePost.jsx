import "./CreatePost.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { create, reset } from "../../features/posts/postsSlice";
import { Modal, Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Dragger } = Upload;

const CreatePost = ({ visible, onCancel }) => {
	const [formData, setFormData] = useState({
		images: [],
		title: "",
		content: "",
		category: "",
		keywords: "",
	});

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [errors, setErrors] = useState({});

	const validateForm = () => {
		const newErrors = {};

		if (!formData.images || formData.images.length === 0) {
			newErrors.images = "Image is required";
		}

		if (!formData.category) {
			newErrors.category = "Category is required";
		}

		if (!formData.title) {
			newErrors.title = "Title is required";
		}

		if (!formData.content) {
			newErrors.content = "Description is required";
		}

		if (!formData.keywords) {
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

	const [preview, setPreview] = useState({
		imgs: [],
	});

	const handleImageChange = (info) => {
		const imageList = info.fileList.map((file) => file.originFileObj);
		setFormData({
			...formData,
			images: imageList,
		});
		setPreview({
			imgs: imageList,
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();

		if (validateForm()) {
			const form = new FormData();
			form.append("category", String(formData.category));
			form.append("title", formData.title);
			form.append("content", formData.content);
			form.append("keywords", formData.keywords);
			formData.images.forEach((image) => {
				form.append("images", image);
			});

			dispatch(create(form));
			onCancel();
			dispatch(reset());
			navigate("/");
		}
	};

	return (
		<Modal
			open={visible}
			onCancel={onCancel}
			footer={null}
			className="create-post-modal">
			<form onSubmit={onSubmit} className="form-register">
				<div className="ant-modal-header">
					<h3>Create New Post</h3>
				</div>
				<div className="ant-modal-body">
					<div className="image-upload-column">
						<Dragger
							name="images"
							multiple
							beforeUpload={() => false}
							onChange={handleImageChange}
							iconRender={(fileList) => (
								<InboxOutlined className="upload-icon" />
							)}>
							<p className="ant-upload-drag-icon">
								<InboxOutlined />
							</p>
							<p className="ant-upload-text">
								Click or drag files to this area to upload
							</p>
							<p className="ant-upload-hint">
								Supported files: .PNG, .JPG, .JPEG
							</p>
						</Dragger>
						{errors.images && <p>{errors.images}</p>}
						<div className="image-preview">
							{preview.imgs.map((image, i) => (
								<div key={i} className="image-preview-item">
									<img src={URL.createObjectURL(image)} alt={`Image ${i}`} />
								</div>
							))}
						</div>
					</div>
					<div className="details-column">
						<div className="custom-label-input">
							<label
								className="material-symbols-outlined label-icon"
								htmlFor="categorySelect">
								category
							</label>
							<select
								name="category"
								id="categorySelect"
								onChange={(e) =>
									setFormData({ ...formData, category: e.target.value })
								}>
								<option value="">--Pick a category--</option>
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
						<div className="custom-label-input">
							<label
								htmlFor="postTitle"
								className="material-symbols-outlined label-icon">
								title
							</label>
							<input
								id="postTitle"
								type="text"
								name="title"
								onChange={onChange}
								placeholder="Title"
								className="text-input"
							/>
							{errors.title && <p>{errors.title}</p>}
						</div>
						<div className="custom-label-input">
							<label
								htmlFor="postDescription"
								className="material-symbols-outlined label-icon">
								description
							</label>
							<textarea
								type="text"
								name="content"
								onChange={onChange}
								placeholder="Description"
								className="text-input"
								id="postDescription"
							/>
							{errors.content && <p>{errors.content}</p>}
						</div>
						<div className="custom-label-input">
							<label className="material-symbols-outlined label-icon">
								label
							</label>
							<textarea
								type="text"
								name="keywords"
								onChange={onChange}
								placeholder="Keywords"
								className="text-input"
							/>
							{errors.keywords && <p>{errors.keywords}</p>}
						</div>
					</div>
				</div>
				<div className="create-post-actions">
					<button type="submit">Share</button>
				</div>
			</form>
		</Modal>
	);
};

export default CreatePost;
