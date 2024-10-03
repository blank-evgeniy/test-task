import UserCard from "../UserCard/UserCard";
import { useEffect } from "react";
import { useAppDispatch } from "@/store/store";
import { fetchUsers } from "@/store/api/fetchUsers";
import { useSelector } from "react-redux";
import { selectUsers } from "@/store/selectors/selectUsers";
import { selectUsersLoading } from "@/store/selectors/selectUsersLoading";
import { selectUsersError } from "@/store/selectors/selectUsersError";

interface UsersListProps {
  className?: string;
  archived?: boolean;
}

const USERS_LIMIT = 6;

const UsersList = ({ className, archived = false }: UsersListProps) => {
  const dispatch = useAppDispatch();

  const users = useSelector(selectUsers);
  const loading = useSelector(selectUsersLoading);
  const error = useSelector(selectUsersError);

  useEffect(() => {
    dispatch(fetchUsers(USERS_LIMIT));
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const filteredUsers = users.filter((user) => user.archived === archived);

  return (
    <div className={className}>
      {filteredUsers.map((user) => (
        <UserCard user={user} key={user.id} disable={archived} />
      ))}
    </div>
  );
};

export default UsersList;
