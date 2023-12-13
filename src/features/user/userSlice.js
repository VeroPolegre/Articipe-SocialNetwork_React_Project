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
      });
  },
});

export default userSlice.reducer;
