import { classNames } from "@/lib/classNames";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

import styles from "./Header.module.css";

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <header className={classNames(styles.header, {}, [className])}>
      <div className={styles.container}>
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
