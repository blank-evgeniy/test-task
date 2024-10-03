import { User, UserData } from "@/types/User";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type fetchUsersProps = number;

export const fetchUsers = createAsyncThunk<
  User[],
  fetchUsersProps,
  { rejectValue: string }
>("users/fetchUsers", async (limit, { rejectWithValue }) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users?_limit=${limit}`
    );

    if (!response.data) {
      throw new Error();
    }

    //Сохраняются только нужные данные, приходящие с серевера (интерфейс User),
    //чтобы не хранить лишние в сторе
    const fetchedData: UserData[] = response.data;

    const usersData: User[] = fetchedData.map((user) => {
      return {
        id: user.id,
        username: user.username,
        company: user.company.name,
        city: user.address.city,
        image: "", //с сервера не приходит изображение и информация об архивации, поэто тут захардкожено
        archived: false,
      };
    });

    return usersData;
  } catch (error) {
    console.log(error);
    return rejectWithValue("An error occurred while fetching the data");
  }
});
