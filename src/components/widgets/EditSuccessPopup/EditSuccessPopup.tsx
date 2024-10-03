import { CrossIcon } from "@/assets/icons";
import Popup from "@/components/shared/Popup/Popup";
import SuccessImage from "@/assets/images/ok.png";

import styles from "./EditSuccessPopup.module.css";

interface EditSuccessPopupProps {
  onClose: () => void;
  active: boolean;
}

//Попап для успешного обновления данных профиля
const EditSuccessPopup = ({ active, onClose }: EditSuccessPopupProps) => {
  return (
    <Popup active={active} onClose={onClose} className={styles.popup}>
      <button className={styles.cross} onClick={onClose}>
        <CrossIcon />
      </button>
      <img className={styles.image} src={SuccessImage} alt="Успешно" />
      <p className={styles.message}>Изменения сохранены!</p>
    </Popup>
  );
};

export default EditSuccessPopup;
