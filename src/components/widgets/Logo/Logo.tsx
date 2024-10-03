import { classNames } from "@/lib/classNames";
import { LogoIcon } from "@/assets/icons";
import { Link } from "react-router-dom";

import styles from "./Logo.module.css";

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <Link to="/" className={classNames(styles.logo, {}, [className])}>
      <LogoIcon />
      <div className={styles.name}>
        at-<span className={styles.bold}>work</span>
      </div>
    </Link>
  );
};

export default Logo;
