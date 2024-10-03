import { CrossIcon } from "@/assets/icons";
import styles from "./EditSuccessPopup.module.css";
import Popup from "@/components/shared/Popup/Popup";
import SuccessImage from "@/assets/images/ok.png";

interface EditSuccessPopupProps {
  onClose: () => void;
  active: boolean;
}

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
