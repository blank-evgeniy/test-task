import { classNames } from "@/lib/classNames";
import { useAppDispatch } from "@/store/store";
import { usersActions } from "@/store/reducers/userSlice";
import styles from "./UserMenu.module.css";
import { Link } from "react-router-dom";

interface UserMenuProps {
  className?: string;
  archived: boolean;
  userId: number;
}

//Меню действий с карточками пользователей
const UserMenu = ({ className, archived, userId }: UserMenuProps) => {
  const dispatch = useAppDispatch();

  const onArchive = () => {
    dispatch(usersActions.archiveUser(userId));
  };

  const onUnarchive = () => {
    dispatch(usersActions.unarchiveUser(userId));
  };

  const onHide = () => {
    dispatch(usersActions.hideUser(userId));
  };

  return (
    <div className={classNames(styles.user_menu, {}, [className])}>
      {archived ? (
        <button onClick={onUnarchive}>Активировать</button>
      ) : (
        <>
          <Link to={`/profile/${userId}`}>Редактировать</Link>
          <button onClick={onArchive}>Архивировать</button>
          <button onClick={onHide}>Скрыть</button>
        </>
      )}
    </div>
  );
};

export default UserMenu;
