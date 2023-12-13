import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import postsService from "./postsService";

const initialState = {
	posts: [],
	post: {},
	hasMorePages: true,
	isError: false,
	isSuccess: false,
	message: "",
};

export const create = createAsyncThunk(
	"posts/create",
	async (formData, thunkAPI) => {
		try {
			return await postsService.createPost(formData);
		} catch (error) {
			const message = error.response.data.message;
			console.error(error);
			return thunkAPI.rejectWithValue(message);
		}
	}
);

export const getPosts = createAsyncThunk(
	"posts/getPosts",
	async ({ page, limit } = {}) => {
		try {
			return await postsService.getPosts({ page, limit });
		} catch (error) {
			console.error(error);
			throw error;
		}
	}
);

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
export const like = createAsyncThunk("posts/like", async (_id) => {
	try {
		return await postsService.like(_id);
	} catch (error) {
		console.error(error);
	}
});

export const unlike = createAsyncThunk("posts/unlike", async (_id) => {
	try {
		return await postsService.unlike(_id);
	} catch (error) {
		console.error(error);
		throw error;
	}
});

export const getPostsByKeywords = createAsyncThunk(
	"posts/getPostsByKeywords",
	async (keywords) => {
		try {
			return await postsService.getPostsByKeywords(keywords);
		} catch (error) {
			console.error(error);
		}
	}
);

export const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		reset: (state) => {
			state.isError = false;
			state.isSuccess = false;
			state.message = "";
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(create.fulfilled, (state, action) => {
				state.post = action.payload;
				state.isSuccess = true;
				state.message = action.payload.message;
			})
			.addCase(create.rejected, (state, action) => {
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(getPosts.fulfilled, (state, action) => {
				state.posts = [...state.posts, ...action.payload.posts];
				state.hasMorePages = action.payload.hasMorePages;
				state.isSuccess = true;
				state.message = action.payload.message;
			})
			.addCase(getPosts.rejected, (state, action) => {
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(getPostById.fulfilled, (state, action) => {
				state.post = action.payload;
				state.isSuccess = true;
				state.message = action.payload.message;
			})
			.addCase(getPostById.rejected, (state, action) => {
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(getPostByTitle.fulfilled, (state, action) => {
				state.post = action.payload;
				state.isSuccess = true;
				state.message = action.payload.message;
			})
			.addCase(getPostByTitle.rejected, (state, action) => {
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(getPostsByKeywords.fulfilled, (state, action) => {
				const posts = action.payload.map((post) => ({
					images: post.images,
				}));
				state.posts = posts.flat();
				state.isSuccess = true;
				state.message = action.payload.message;
			})
			.addCase(getPostsByKeywords.rejected, (state, action) => {
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(like.fulfilled, (state, action) => {
				const posts = state.posts.map((post) => {
					if (post._id === action.payload._id) {
						return action.payload;
					}
					return post;
				});
				state.posts = posts;
			})
			.addCase(unlike.fulfilled, (state, action) => {
				const updatedPosts = state.posts.map((post) => {
					if (post._id === action.payload._id) {
						return action.payload;
					}
					return post;
				});
				state.posts = updatedPosts;
			});
	},
});

export default postsSlice.reducer;
