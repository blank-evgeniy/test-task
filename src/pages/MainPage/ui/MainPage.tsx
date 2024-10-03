import styles from "./MainPage.module.css";
import UsersList from "@/components/widgets/UsersList/UsersList";

const MainPage = () => {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Активные</h2>
        <UsersList className={styles.cards_list} />

        <h2 className={styles.heading}>Архив</h2>
        <UsersList className={styles.cards_list} archived />
      </div>
    </main>
  );
};

export default MainPage;
