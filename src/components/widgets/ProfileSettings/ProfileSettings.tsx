import { classNames } from "@/lib/classNames";
import styles from "./ProfileSettings.module.css";
import Category from "@/components/shared/Category/Category";

interface ProfileSettingsProps {
  className?: string;
  image: string;
}

const ProfileSettings = ({ className, image }: ProfileSettingsProps) => {
  return (
    <article className={classNames(styles.profile_settings, {}, [className])}>
      <img src={image} className={styles.photo} />
      <h2 className={styles.title}>Данные профиля</h2>
      <Category className={styles.category}>Рабочее пространство</Category>
      <Category className={styles.category}>Приватность</Category>
      <Category className={styles.category}>Безопасность</Category>
    </article>
  );
};

export default ProfileSettings;
