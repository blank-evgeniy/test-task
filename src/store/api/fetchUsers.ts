import { User, UserData } from "@/types/User";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import Photo from "@/assets/images/profile_photo.jpg";

type fetchUsersProps = number;

//thunc для получения пользователей с сервера
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
        name: user.name,
        username: user.username,
        mail: user.email,
        phone: user.phone,
        company: user.company.name,
        city: user.address.city,
        image: Photo, //с сервера не приходит изображение и информация об архивации, поэтому тут захардкожено
        archived: false,
      };
    });

    return usersData;
  } catch (error) {
    console.log(error);
    return rejectWithValue("An error occurred while fetching the data");
  }
});
