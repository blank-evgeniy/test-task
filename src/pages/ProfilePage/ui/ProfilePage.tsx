import { Link, useParams } from "react-router-dom";
import styles from "./ProfilePage.module.css";
import { BackarrowIcon } from "@/assets/icons";
import { useSelector } from "react-redux";
import { selectUserById } from "@/store/selectors/selectUsers";
import { useEffect } from "react";
import { useAppDispatch } from "@/store/store";
import { fetchUsers } from "@/store/api/fetchUsers";
import { selectUsersLoading } from "@/store/selectors/selectUsersLoading";
import { selectUsersError } from "@/store/selectors/selectUsersError";
import Loader from "@/components/shared/Loader/Loader";
import { USERS_LIMIT } from "@/components/widgets/UsersList/UsersList";
import ProfileSettings from "@/components/widgets/ProfileSettings/ProfileSettings";
import ProfileEdit from "@/components/widgets/ProfileEdit/ProfileEdit";

type Params = "id";

const ProfilePage = () => {
  const dispatch = useAppDispatch();

  const loading = useSelector(selectUsersLoading);
  const error = useSelector(selectUsersError);

  const params = useParams<Params>();
  const userId = params.id!;

  const user = useSelector(selectUserById(+userId));

  // в реальном проекте изменение профиля бы шло на сервер
  // path запросом, но в данном случае, так как все измененны данные
  // хранятся в сторе, то логично при открытии профиля пользователя,
  // если пользователе еще не были загружен, подгрузить их
  useEffect(() => {
    if (!user) {
      dispatch(fetchUsers(USERS_LIMIT));
    }
  }, [user, dispatch]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!user) {
    return (
      <main className={styles.page}>
        <div className={styles.container}>Пользователь не найден</div>
      </main>
    );
  }

  if (user.hidden) {
    return (
      <main className={styles.page}>
        <div className={styles.container}>Пользователь был скрыт</div>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Link to="/" className={styles.back}>
          <BackarrowIcon />
          Назад
        </Link>

        <div className={styles.profile}>
          <ProfileSettings image={user.image} />
          <ProfileEdit user={user} />
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
