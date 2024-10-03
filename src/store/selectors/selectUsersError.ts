import { StateSchema } from "@/types/store";

export const selectUsersError = (state: StateSchema) => state.users.error;
