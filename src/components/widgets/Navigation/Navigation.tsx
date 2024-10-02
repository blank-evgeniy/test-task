import { classNames } from "@/lib/classNames";
import ProfileImage from "@/assets/images/profile_photo.jpg";

import styles from "./Navigation.module.css";
import { FavoriteIcon, NotificationIcon } from "@/assets/icons";

interface NavigationProps {
  className?: string;
}

const Navigation = ({ className }: NavigationProps) => {
  return (
    <nav className={classNames(styles.navigation, {}, [className])}>
      <div className={styles.navmenu}>
        <FavoriteIcon />
        <NotificationIcon />
      </div>
      <div className={styles.profile}>
        <img className={styles.profile_img} src={ProfileImage} />
        <p className={styles.profile_name}>Ivan1234</p>
      </div>
    </nav>
  );
};

export default Navigation;
