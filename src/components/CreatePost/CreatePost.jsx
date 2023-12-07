import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {create} from "../../features/posts/postsSlice";
import {useNavigate} from "react-router-dom";

const CreatePost = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const [errors,
        setErrors] = useState({});

    const validateForm = (formData) => {
        const newErrors = {};

        if (!formData.get("images")) {
            newErrors.images = "Image is required";
        }

        if (!formData.get("title")) {
            newErrors.title = "Title is required";
        }

        if (!formData.get("content")) {
            newErrors.content = "Description is required";
        }

        if (!formData.get("keywords")) {
            newErrors.keywords = "Date of birth is required";
        }

        setErrors(newErrors);

        return Object
            .keys(newErrors)
            .length === 0;
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        if (validateForm(formData)) {
            dispatch(create(formData));
            navigate("/")
        }
    };
    return (
        <React.Fragment>
            <form onSubmit={onSubmit} className="form-register">
                <div>
                    <input type="file" name="images" accept="image/png, image/jpeg, image/jpg"/>
                </div>
                <div>
                    <input type="text" name="title" placeholder="title"/> {errors.title && <p>{errors.title}</p>}
                </div>
                <div>
                    <input type="text" name="content" placeholder="description"/> {errors.content && <p>{errors.content}</p>}
                </div>
                <div>
                    <input type="text" name="keywords" placeholder="keywords"/> {errors.keywords && <p>{errors.keywords}</p>}
                </div>
                <button type="submit">Create Post</button>
            </form>
        </React.Fragment>
    )
}

export default CreatePost