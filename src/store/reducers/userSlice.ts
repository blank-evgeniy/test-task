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

  reducers: {
    //занесение пользователся в архив
    archiveUser(state, action: PayloadAction<number>) {
      const userToUpdate = state.users.find(
        (user) => user.id === action.payload
      );

      if (userToUpdate) {
        userToUpdate.archived = true;
      }
    },
    //Удаление пользователся из архива
    unarchiveUser(state, action: PayloadAction<number>) {
      const userToUpdate = state.users.find(
        (user) => user.id === action.payload
      );

      if (userToUpdate) {
        userToUpdate.archived = false;
      }
    },
    //Скрыть пользователя
    hideUser(state, action: PayloadAction<number>) {
      const userToUpdate = state.users.find(
        (user) => user.id === action.payload
      );

      if (userToUpdate) {
        userToUpdate.hidden = true;
      }
    },
    //Редактировать пользователя
    editUser(state, action: PayloadAction<User>) {
      const { id, ...newData } = action.payload;

      const userToUpdate = state.users.find((user) => user.id === id);

      if (userToUpdate) {
        Object.assign(userToUpdate, newData);
      }
    },
  },

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

export const { actions: usersActions } = usersSlice;
export default usersSlice.reducer;
