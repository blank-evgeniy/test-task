import { classNames } from "@/lib/classNames";
import styles from "./ProfileEdit.module.css";
import { User } from "@/types/User";
import TextField from "@/components/shared/TextField/TextField";
import Button from "@/components/shared/Button/Button";
import { useState } from "react";
import { useAppDispatch } from "@/store/store";
import { usersActions } from "@/store/reducers/usersSlice";
import EditSuccessPopup from "../EditSuccessPopup/EditSuccessPopup";

interface ProfileEditProps {
  className?: string;
  user: User;
}

interface NewUserData {
  name: string;
  username: string;
  mail: string;
  city: string;
  phone: string;
  company: string;
}

const ProfileEdit = ({ className, user }: ProfileEditProps) => {
  const dispatch = useAppDispatch();

  const [vaildateMessage, setValidateMessage] = useState("");
  const [popupOpened, setPopupOpened] = useState(false);

  const [name, setName] = useState(user.name);
  const [username, setUsername] = useState(user.username);
  const [mail, setMail] = useState(user.mail);
  const [city, setCity] = useState(user.city);
  const [phone, setPhone] = useState(user.phone);
  const [company, setCompany] = useState(user.company);

  const newUserData: NewUserData = {
    name,
    username,
    mail,
    city,
    phone,
    company,
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validate()) {
      setValidateMessage("");
      setPopupOpened(true);
      dispatch(
        usersActions.editUser({
          id: user.id,
          image: user.image,
          ...newUserData,
        })
      );
    } else {
      setValidateMessage("Все поля должны быть заполнены");
    }
  };

  const validate = () => {
    let key: keyof NewUserData;

    for (key in newUserData) {
      const prop = newUserData[key] as string;
      if (prop.length === 0) {
        return false;
      }
    }
    return true;
  };

  return (
    <article className={classNames(styles.profile_edit, {}, [className])}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Данные профиля</h1>
        <TextField
          id="name"
          heading="Имя"
          placeholder=""
          value={name}
          onChange={setName}
          onClear={() => setName("")}
        />
        <TextField
          id="username"
          heading="Никнейм"
          placeholder=""
          value={username}
          onChange={setUsername}
          onClear={() => setUsername("")}
        />
        <TextField
          id="mail"
          heading="Почта"
          placeholder=""
          value={mail}
          onChange={setMail}
          onClear={() => setMail("")}
        />
        <TextField
          id="city"
          heading="Город"
          placeholder=""
          value={city}
          onChange={setCity}
          onClear={() => setCity("")}
        />
        <TextField
          id="phone"
          heading="Телефон"
          placeholder=""
          value={phone}
          onChange={setPhone}
          onClear={() => setPhone("")}
        />
        <TextField
          id="company"
          heading="Название компании"
          placeholder=""
          value={company}
          onChange={setCompany}
          onClear={() => setCompany("")}
        />
        {!!vaildateMessage && (
          <p className={styles.message}>{vaildateMessage}</p>
        )}
        <Button className={styles.button} type="submit">
          Сохранить
        </Button>
      </form>

      <EditSuccessPopup
        active={popupOpened}
        onClose={() => setPopupOpened(false)}
      />
    </article>
  );
};

export default ProfileEdit;
