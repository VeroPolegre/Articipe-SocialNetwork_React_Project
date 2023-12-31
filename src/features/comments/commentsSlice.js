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
      return await commentsService.createComment(commentData);
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue("Error creating comment");
    }
  }
);

export const getComments = createAsyncThunk(
  "comments/getComments",
  async (postId, thunkAPI) => {
    try {
      return await commentsService.getComments(postId);
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
      return await commentsService.deleteComment(commentId);
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
        const commentsUpdated = state.comments.comments.filter(
          (comment) => comment._id != action.payload.comment._id
        );
        state.comments = {
          postId: state.comments.postId,
          comments: commentsUpdated,
        };
        state.isSuccess = true;
        state.message = "Comment deleted successfully.";
      })
      .addCase(deleteComment.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(likeComment.fulfilled, (state, action) => {
        state.comment = action.payload;
        const commentsUpdated = state.comments.comments.map((comment) => {
          if (comment._id == action.payload._id) {
            comment = {
              ...action.payload,
              userId: comment.userId,
            };
          }
          return comment;
        });
        state.comments = {
          postId: state.comments.postId,
          comments: commentsUpdated,
        };
        state.isSuccess = true;
      })
      .addCase(likeComment.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(unlikeComment.fulfilled, (state, action) => {
        state.comment = action.payload;
        const commentsUpdated = state.comments.comments.map((comment) => {
          if (comment._id == action.payload._id) {
            comment = {
              ...action.payload,
              userId: comment.userId,
            };
          }
          return comment;
        });
        state.comments = {
          postId: state.comments.postId,
          comments: commentsUpdated,
        };
        state.isSuccess = true;
      })
      .addCase(unlikeComment.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = commentsSlice.actions;
export default commentsSlice.reducer;
