import { User } from "@/types/User";
import UserCard from "../UserCard/UserCard";

interface UsersListProps {
  className?: string;
  archived?: boolean;
  users: User[];
}

const UsersList = ({ className, archived = false, users }: UsersListProps) => {
  return (
    <div className={className}>
      {users.map((user) => (
        <UserCard user={user} key={user.id} disable={archived} />
      ))}
    </div>
  );
};

export default UsersList;
