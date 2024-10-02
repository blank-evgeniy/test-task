import { classNames } from "@/lib/classNames";
import styles from "./Button.module.css";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ className, children, ...otherProps }: ButtonProps) => {
  return (
    <button
      className={classNames(styles.button, {}, [className])}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
