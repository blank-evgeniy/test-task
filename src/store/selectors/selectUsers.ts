import { StateSchema } from "@/types/store";
import { createSelector } from "@reduxjs/toolkit";

//Селектор для получения всех пользователей
export const selectUsers = (state: StateSchema) => state.users.users;

//Селектор для получения пользователя по ID
export const selectUserById = (userId: number) =>
  createSelector(selectUsers, (users) =>
    users.find((user) => user.id === userId)
  );
