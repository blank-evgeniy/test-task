import { classNames } from "@/lib/classNames";
import styles from "./UserCard.module.css";
import Dropdown from "@/components/shared/Dropdown/Dropdown";
import { User } from "@/types/User";
import { Link } from "react-router-dom";

interface UserCardProps {
  className?: string;
  disable?: boolean;
  user: User;
}

const UserCard = ({ className, user, disable = false }: UserCardProps) => {
  return (
    <div
      className={classNames(
        styles.user_card,
        { [styles.card_disable]: disable },
        [className]
      )}
    >
      <img src={user.image} className={styles.photo} />
      <div className={styles.content}>
        <div className={styles.content_block}>
          <p className={styles.username}>{user.username}</p>
          <p className={styles.company_name}>{user.company}</p>
        </div>

        <p className={styles.city}>{user.city}</p>

        <Dropdown className={styles.dropdown}>
          <div className={styles.dropdown_content}>
            {disable ? (
              <button>Активировать</button>
            ) : (
              <>
                <Link to={`/profile/${user.id}`}>Редактировать</Link>
                <button>Архивировать</button>
                <button>Скрыть</button>
              </>
            )}
          </div>
        </Dropdown>
      </div>
    </div>
  );
};

export default UserCard;
