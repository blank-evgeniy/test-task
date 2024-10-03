import { StateSchema } from "@/types/store";

export const selectUsers = (state: StateSchema) => state.users.users;
