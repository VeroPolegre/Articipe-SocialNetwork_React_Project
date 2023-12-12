import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "./userService";

const initialState = {
	user: {},
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

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getLoggedUser.fulfilled, (state, action) => {
                state.user = action.payload;
            })
    }
});

export default userSlice.reducer;