import UserCard from "../UserCard/UserCard";
import { useEffect } from "react";
import { useAppDispatch } from "@/store/store";
import { fetchUsers } from "@/store/api/fetchUsers";
import { useSelector } from "react-redux";
import { selectUsers } from "@/store/selectors/selectUsers";
import { selectUsersLoading } from "@/store/selectors/selectUsersLoading";
import { selectUsersError } from "@/store/selectors/selectUsersError";
import Loader from "@/components/shared/Loader/Loader";

import styles from "./UsersList.module.css";

interface UsersListProps {
  className?: string;
  archived?: boolean;
}

//максимальное количество пользователей получаемых с сервера
export const USERS_LIMIT = 6;

//компонент отвечающий за вывод архивированных и активных пользователей
const UsersList = ({ className, archived = false }: UsersListProps) => {
  const dispatch = useAppDispatch();

  const users = useSelector(selectUsers);
  const loading = useSelector(selectUsersLoading);
  const error = useSelector(selectUsersError);

  useEffect(() => {
    if (users.length === 0) {
      dispatch(fetchUsers(USERS_LIMIT));
    }
  }, [dispatch, users]);

  if (loading) {
    return (
      <div className={styles.loading}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  //удаление скрытых пользователей и проверка поля архивации согласно пропсу компонента
  const filteredUsers = users.filter(
    (user) => !user.hidden && user.archived === archived
  );

  return (
    <div className={className}>
      {filteredUsers.map((user) => (
        <UserCard user={user} key={user.id} disable={archived} />
      ))}
    </div>
  );
};

export default UsersList;
