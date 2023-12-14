import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "./userService";

const initialState = {
	user: {},
	searchedUsers: [],
	isError: false,
	isSuccess: false,
	message: "",
};

export const getLoggedUser = createAsyncThunk(
	"user/getLoggedUser",
	async () => {
		try {
			return await userService.getLoggedUser();
		} catch (error) {
			console.error(error);
		}
	}
);

export const getUsersByName = createAsyncThunk(
	"user/getUsersByName",
	async (name, thunkAPI) => {
		try {
			return await userService.getUsersByName(name);
		} catch (error) {
			console.error(error);
			return thunkAPI.rejectWithValue("Error fetching users by name");
		}
	}
);

export const follow = createAsyncThunk("user/follow", async (_id) => {
	try {
		return await userService.follow(_id);
	} catch (error) {
		console.error(error);
	}
});

export const unfollow = createAsyncThunk("user/unfollow", async (_id) => {
	try {
		return await userService.unfollow(_id);
	} catch (error) {
		console.error(error);
	}
});

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getLoggedUser.fulfilled, (state, action) => {
				state.user = action.payload.loggedUser;
				state.isSuccess = true;
				state.message = "Logged user fetched successfully.";
			})
			.addCase(getLoggedUser.rejected, (state, action) => {
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(getUsersByName.fulfilled, (state, action) => {
				state.searchedUsers = action.payload;
				state.isSuccess = true;
				state.message = "Users fetched by name successfully.";
			})
			.addCase(getUsersByName.rejected, (state, action) => {
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(follow.fulfilled, (state, action) => {
				const users = state.users.map((user) => {
					if (user._id === action.payload._id) {
						return action.payload;
					}
					return user;
				});
				state.user = users;
				state.isSuccess = true;
				state.message = "User followed successfully.";
			})
			.addCase(follow.rejected, (state, action) => {
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(unfollow.fulfilled, (state, action) => {
				const users = state.users.map((user) => {
					if (user._id === action.payload._id) {
						return action.payload;
					}
					return user;
				});
				state.user = users;
				state.isSuccess = true;
				state.message = "User unfollowed successfully.";
			})
			.addCase(unfollow.rejected, (state, action) => {
				state.isError = true;
				state.message = action.payload;
			});
	},
});

export default userSlice.reducer;
