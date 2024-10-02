import { classNames } from "@/lib/classNames";

import styles from "./Logo.module.css";
import { LogoIcon } from "@/assets/icons";

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <div className={classNames(styles.logo, {}, [className])}>
      <LogoIcon />
      <div className={styles.name}>
        at-<span className={styles.bold}>work</span>
      </div>
    </div>
  );
};

export default Logo;
