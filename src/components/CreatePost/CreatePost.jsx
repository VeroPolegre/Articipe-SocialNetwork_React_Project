import { useState } from "react";
import { useDispatch } from "react-redux";
import { create } from "../../features/posts/postsSlice";
import { Modal, Button, Upload, Select, Input, message } from "antd";
import { UploadOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

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

	const validateForm = () => {
		const newErrors = {};

		if (formData.images.length === 0) {
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
		console.log("change", formData);
	};

	const [preview, setPreview] = useState({
		imgs: [],
	});
	const handleImageChange = (info) => {
		const imageNames = info.fileList.map((file) => file.name);
		setFormData({
			...formData,
			images: imageNames,
		});
		setPreview({
			imgs: info.fileList.map((file) => file.originFileObj),
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();
		if (validateForm()) {
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
			<div className="ant-modal-header">
				<h3>Create New Post</h3>
			</div>
			<div className="ant-modal-body">
				<div className="image-upload-column">
					<Upload.Dragger
						name="images"
						onChange={handleImageChange}
						accept="image/png, image/jpeg, image/jpg"
						multiple
						beforeUpload={() => false}
						iconRender={(fileList) => (
							<UploadOutlined className="upload-icon" />
						)}>
						<label
							htmlFor="selectImg"
							className="material-symbols-outlined custom-file-upload">
							add_a_photo
						</label>
					</Upload.Dragger>
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
					<div className="ant-form-item">
						<label className="material-symbols-outlined">category</label>
						<Select
							name="category"
							onChange={(value) =>
								setFormData({ ...formData, category: value })
							}
							placeholder="--Please pick a category--">
							<Option value="Illustration">Illustration</Option>
							<Option value="Photography">Photography</Option>
							<Option value="Concept art">Concept art</Option>
							<Option value="Art direction">Art direction</Option>
							<Option value="Graphic design">Graphic design</Option>
							<Option value="Collage">Collage</Option>
							<Option value="AI">AI</Option>
							<Option value="Fashion">Fashion</Option>
							<Option value="UI/UX">UI/UX</Option>
							<Option value="Branding">Branding</Option>
							<Option value="Video / Film">Video / Film</Option>
							<Option value="Animation">Animation</Option>
							<Option value="3D">3D</Option>
						</Select>
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
				<Button icon={<ArrowLeftOutlined />} onClick={onCancel}>
					Close
				</Button>
				<Button type="primary" onClick={onSubmit}>
					Share
				</Button>
			</div>
		</Modal>
	);
};

export default CreatePost;
