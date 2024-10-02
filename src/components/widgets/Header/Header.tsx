import { classNames } from "@/lib/classNames";
import styles from "./Header.module.css";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

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
