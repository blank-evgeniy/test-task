import { classNames } from "@/lib/classNames";
import Portal from "../Portal/Portal";
import { useEffect } from "react";

import styles from "./Popup.module.css";

interface PopupProps {
  className?: string;
  children: React.ReactNode;
  active: boolean;
  onClose: () => void;
  closeTimeout?: number;
}

const Popup = ({
  className,
  children,
  active,
  closeTimeout = 4000,
  onClose,
}: PopupProps) => {
  useEffect(() => {
    if (!active) return; // Если не активен, выходим из эффекта

    //таймер попапа
    const timer = setTimeout(() => {
      onClose();
    }, closeTimeout);

    return () => clearTimeout(timer); // Очищаем таймер при размонтировании или изменении зависимостей
  }, [active, onClose, closeTimeout]);

  // не даем пользоваться интерфейсом за оверлеем
  const onOutsideClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  if (!active) return null;

  return (
    <Portal>
      <div className={styles.container}>
        <div className={styles.overlay} onClick={onOutsideClick}>
          <div className={classNames(styles.popup, {}, [className])}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Popup;
