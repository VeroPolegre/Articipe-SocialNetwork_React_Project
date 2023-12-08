import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import commentsService from "./commentsService";

const initialState = {
  comments: [],
  comment: {},
  isError: false,
  isSuccess: false,
  message: "",
};

export const createComment = createAsyncThunk(
  "comments/createComment",
  async (commentData, thunkAPI) => {
    try {
      return await commentsService.createComment(
        commentData.postId,
        commentData.text,
        commentData.image
      );
    } catch (error) {
      console.error(error);
      const message = error.response.data.message;
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getComments = createAsyncThunk(
  "comments/getComments",
  async (_, thunkAPI) => {
    try {
      return await commentsService.getComments();
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue("Error fetching comments");
    }
  }
);

export const deleteComment = createAsyncThunk(
  "comments/deleteComment",
  async (commentId, thunkAPI) => {
    try {
      await commentsService.deleteComment(commentId);
      return commentId;
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue("Error deleting comment");
    }
  }
);

export const likeComment = createAsyncThunk(
  "comments/likeComment",
  async (commentId, thunkAPI) => {
    try {
      return await commentsService.likeComment(commentId);
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue("Error liking comment");
    }
  }
);

export const unlikeComment = createAsyncThunk(
  "comments/unlikeComment",
  async (commentId, thunkAPI) => {
    try {
      return await commentsService.unlikeComment(commentId);
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue("Error unliking comment");
    }
  }
);

export const updateCommentLikes = createAsyncThunk(
  "comments/updateCommentLikes",
  async ({ commentId, userId }, thunkAPI) => {
    try {
      return await commentsService.updateCommentLikes(commentId, userId);
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue("Error updating comment likes");
    }
  }
);

export const commentsSlice = createSlice({
  name: "comments",
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
      .addCase(createComment.fulfilled, (state, action) => {
        state.comment = action.payload;
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(createComment.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getComments.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(getComments.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        state.comments = state.comments.filter(
          (comment) => comment._id !== action.payload
        );
        state.isSuccess = true;
        state.message = "Comment deleted successfully.";
      })
      .addCase(deleteComment.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(likeComment.fulfilled, (state, action) => {
        state.comment = action.payload;
        state.isSuccess = true;
        state.message = "Comment liked successfully.";
      })
      .addCase(likeComment.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(unlikeComment.fulfilled, (state, action) => {
        state.comment = action.payload;
        state.isSuccess = true;
        state.message = "Comment unliked successfully.";
      })
      .addCase(unlikeComment.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default commentsSlice.reducer;
