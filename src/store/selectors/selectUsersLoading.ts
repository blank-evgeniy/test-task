import { StateSchema } from "@/types/store";

//селектор для получения состояния загрузки пользователей
export const selectUsersLoading = (state: StateSchema) => state.users.loading;
