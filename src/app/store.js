import { configureStore } from "@reduxjs/toolkit";
import auth from "../features/auth/authSlice";
import posts from "../features/posts/postsSlice";

export const store = configureStore({
	reducer: {
		auth,
		posts,
	},
});
