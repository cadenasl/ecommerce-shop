import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const axios = require("axios");

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get("/fakeApi/users");
  return response.data;
});
export const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuth: false,
    userId: null,
    userName: null,
    email: null,
    loading: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.userName = action.payload;
      state.email = action.payload;
      state.isAuth = true;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      state.userName = null;
      state.email = null;
      state.isAuth = false;
    });
  },
  reducers: {},
});

// Action creators are generated for each case reducer function
export const userActions = userSlice.actions;

export default userSlice;
