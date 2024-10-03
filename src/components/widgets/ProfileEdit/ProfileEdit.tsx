import { classNames } from "@/lib/classNames";
import styles from "./ProfileEdit.module.css";
import { User } from "@/types/User";
import TextField from "@/components/shared/TextField/TextField";
import Button from "@/components/shared/Button/Button";

interface ProfileEditProps {
  className?: string;
  user: User;
}

const ProfileEdit = ({ className, user }: ProfileEditProps) => {
  return (
    <article className={classNames(styles.profile_edit, {}, [className])}>
      <form className={styles.form}>
        <h1 className={styles.title}>Данные профиля</h1>
        <TextField
          id="name"
          heading="Имя"
          placeholder=""
          initialValue={user.name}
        />
        <TextField
          id="username"
          heading="Никнейм"
          placeholder=""
          initialValue={user.username}
        />
        <TextField
          id="mail"
          heading="Почта"
          placeholder=""
          initialValue={user.mail}
        />
        <TextField
          id="city"
          heading="Город"
          placeholder=""
          initialValue={user.city}
        />
        <TextField
          id="phone"
          heading="Телефон"
          placeholder=""
          initialValue={user.phone}
        />
        <TextField
          id="company"
          heading="Название компании"
          placeholder=""
          initialValue={user.company}
        />
        <Button className={styles.button} type="submit">
          Сохранить
        </Button>
      </form>
    </article>
  );
};

export default ProfileEdit;
