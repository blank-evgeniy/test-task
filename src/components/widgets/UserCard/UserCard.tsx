import { classNames } from "@/lib/classNames";
import styles from "./UserCard.module.css";
import Dropdown from "@/components/shared/Dropdown/Dropdown";
import { User } from "@/types/User";
import UserMenu from "../UserMenu/UserMenu";

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
          <UserMenu userId={user.id} archived={Boolean(user.archived)} />
        </Dropdown>
      </div>
    </div>
  );
};

export default UserCard;
