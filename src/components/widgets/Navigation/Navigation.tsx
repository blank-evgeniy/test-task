import { classNames } from "@/lib/classNames";
import ProfileImage from "@/assets/images/profile_photo.jpg";
import { Link } from "react-router-dom";
import { FavoriteIcon, NotificationIcon } from "@/assets/icons";

import styles from "./Navigation.module.css";

interface NavigationProps {
  className?: string;
}

const Navigation = ({ className }: NavigationProps) => {
  return (
    <nav className={classNames(styles.navigation, {}, [className])}>
      <div className={styles.navmenu}>
        <Link to="/favorite" className={styles.link}>
          <FavoriteIcon />
        </Link>
        <Link to="/notification" className={styles.link}>
          <NotificationIcon />
        </Link>
      </div>
      <div className={styles.profile}>
        <img className={styles.profile_img} src={ProfileImage} />
        <p className={styles.profile_name}>Ivan1234</p>
      </div>
    </nav>
  );
};

export default Navigation;
