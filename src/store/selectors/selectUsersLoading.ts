import { StateSchema } from "@/types/store";

export const selectUsersLoading = (state: StateSchema) => state.users.loading;
