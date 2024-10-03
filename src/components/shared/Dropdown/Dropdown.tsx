import { classNames } from "@/lib/classNames";
import { useOutsideClick } from "@/lib/useOutsideClick";
import { useState } from "react";
import { MenuIcon } from "@/assets/icons";
import styles from "./Dropdown.module.css";

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
    <div ref={ref} className={classNames(styles.container, {}, [className])}>
      <button onClick={handleOpen} className={styles.button}>
        {button}
      </button>
      {!!opened && <div className={styles.dropdown}>{children}</div>}
    </div>
  );
};

export default Dropdown;
