import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./reducers/userSlice";
import { useDispatch } from "react-redux";
import { StateSchema } from "@/types/store";

const store = configureStore<StateSchema>({
  reducer: {
    users: usersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default store;
