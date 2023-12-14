import React, { useState } from "react";
import "./CreateComment.scss";
import { useDispatch } from "react-redux";
import { createComment, reset } from "../../features/comments/commentsSlice";
import { InboxOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Upload, Modal } from "antd";

const { Dragger } = Upload;

const CreateComment = ({ visible, onCancel, postId }) => {
  const [formData, setFormData] = useState({
    text: "",
    images: [],
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.text) {
      newErrors.text = "Text is required";
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

  const onSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const form = new FormData();
        form.append("text", formData.text);
        formData.images.forEach((image) => {
          form.append("images", image);
        });

        dispatch(createComment({ postId, form }));
        dispatch(reset());
        onCancel();
        navigate("/");
      } catch (error) {
        console.error("Error creating comment:", error);
      }
    }
  };

  return (
    <Modal
      visible={visible}
      onCancel={onCancel}
      footer={null}
      className="create-comment-modal"
    >
      <form onSubmit={onSubmit} className="form-comment">
        <div className="ant-modal-header">
          <h3>Create New Comment</h3>
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
              )}
            >
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
              <textarea
                id="commentText"
                type="text"
                name="text"
                onChange={onChange}
                placeholder="Add a comment..."
                className="text-input"
              />
              {errors.text && <p>{errors.text}</p>}
            </div>
          </div>
        </div>
        <div className="create-comment-actions">
          <button type="submit">Comment</button>
        </div>
      </form>
    </Modal>
  );
};

export default CreateComment;
