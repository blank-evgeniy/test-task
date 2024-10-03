import { StateSchema } from "@/types/store";

//селектор для получения ошибки при загрузке пользователей
export const selectUsersError = (state: StateSchema) => state.users.error;
