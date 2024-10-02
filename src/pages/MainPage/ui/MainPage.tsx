import Photo from "@/assets/images/profile_photo.jpg";
import styles from "./MainPage.module.css";
import UsersList from "@/components/widgets/UsersList/UsersList";
import { User } from "@/types/User";

const Users: User[] = [
  {
    id: "1",
    username: "Ivan",
    image: Photo,
    company: "at-work",
    city: "Санкт-Петербург",
  },
  {
    id: "2",
    username: "Ivan",
    image: Photo,
    company: "at-work",
    city: "Санкт-Петербург",
  },
  {
    id: "3",
    username: "Ivan",
    image: Photo,
    company: "at-work",
    city: "Санкт-Петербург",
  },
  {
    id: "4",
    username: "Ivan",
    image: Photo,
    company: "at-work",
    city: "Санкт-Петербург",
  },
  {
    id: "5",
    username: "Ivan",
    image: Photo,
    company: "at-work",
    city: "Санкт-Петербург",
    hidden: true,
  },
  {
    id: "6",
    username: "Ivan",
    image: Photo,
    company: "at-work",
    city: "Санкт-Петербург",
    archived: true,
  },
];

const MainPage = () => {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Активные</h2>
        <UsersList
          className={styles.cards_list}
          users={Users.filter((user) => !user.archived && !user.hidden)}
        />

        <h2 className={styles.heading}>Архив</h2>
        <UsersList
          className={styles.cards_list}
          users={Users.filter((user) => user.archived && !user.hidden)}
          archived
        />
      </div>
    </main>
  );
};

export default MainPage;
