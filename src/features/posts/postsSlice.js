import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import postsService from "./postsService";

const initialState = {
	posts: [],
	post: {},
};

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
	try {
		return await postsService.getPosts();
	} catch (error) {
		console.error(error);
	}
});

export const getPostById = createAsyncThunk(
	"posts/getPostById",
	async (_id) => {
		try {
			return await postsService.getPostById(_id);
		} catch (error) {
			console.error(error);
		}
	}
);

export const getPostByTitle = createAsyncThunk(
	"posts/getPostByTitle",
	async (title) => {
		try {
			return await postsService.getPostByTitle(title);
		} catch (error) {
			console.error(error);
		}
	}
);

export const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getPosts.fulfilled, (state, action) => {
				state.posts = action.payload;
			})
			.addCase(getPostById.fulfilled, (state, action) => {
				state.post = action.payload;
			})
			.addCase(getPostByTitle.fulfilled, (state, action) => {
				state.posts = action.payload;
			});
	},
});

export default postsSlice.reducer;
