import { classNames } from "@/lib/classNames";
import styles from "./TextField.module.css";
import { CrossIcon } from "@/assets/icons";

interface TextFieldProps {
  className?: string;
  heading: string;
  placeholder: string;
  id: string;
  value?: string;
  onClear?: () => void;
  onChange?: (value: string) => void;
}

const TextField = ({
  className,
  heading,
  placeholder,
  id,
  value,
  onClear,
  onChange,
}: TextFieldProps) => {
  return (
    <div className={classNames(styles.text_field, {}, [className])}>
      <label className={styles.heading} htmlFor={id}>
        {heading}
      </label>
      <div className={styles.input}>
        <input
          className={styles.field}
          placeholder={placeholder}
          id={id}
          onChange={(e) => {
            if (onChange) onChange(e.target.value);
          }}
          value={value}
        />
        {value && (
          <button className={styles.cross} onClick={onClear}>
            <CrossIcon />
          </button>
        )}
      </div>
    </div>
  );
};

export default TextField;
