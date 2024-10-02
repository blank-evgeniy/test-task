import { classNames } from "@/lib/classNames";
import styles from "./Dropdown.module.css";
import { useOutsideClick } from "@/lib/useOutsideClick";
import { useState } from "react";
import { MenuIcon } from "@/assets/icons";

interface DropdownProps {
  className?: string;
  children?: React.ReactNode;
  opened?: boolean;
  button?: React.ReactNode;
}

const Dropdown = ({
  className,
  children,
  button = <MenuIcon />,
}: DropdownProps) => {
  const [opened, setOpened] = useState(false);

  const ref = useOutsideClick(() => {
    setOpened(false);
  });

  const handleOpen = () => {
    setOpened((prev) => !prev);
  };

  return (
    <div ref={ref} className={styles.container}>
      <button onClick={handleOpen} className={styles.button}>
        {button}
      </button>

      {!!opened && (
        <div className={classNames(styles.dropdown, {}, [className])}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
