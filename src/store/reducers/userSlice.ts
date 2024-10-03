// usersSlice.js
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUsers } from "../api/fetchUsers";
import { User, UsersSchema } from "@/types/User";

const initialState: UsersSchema = {
  users: [],
  loading: false,
  error: undefined,
};

const usersSlice = createSlice({
  name: "users",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default usersSlice.reducer;
