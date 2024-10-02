import { classNames } from "@/lib/classNames";
import styles from "./TextField.module.css";
import { CrossIcon } from "@/assets/icons";
import { useState } from "react";

interface TextFieldProps {
  className?: string;
  heading: string;
  placeholder: string;
  id: string;
  onChange?: (value: string) => void;
}

const TextField = ({
  className,
  heading,
  placeholder,
  id,
  onChange,
}: TextFieldProps) => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (onChange) onChange(event.target.value);
  };

  const handleClear = () => {
    setValue("");
  };

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
          onChange={handleChange}
          value={value}
        />
        {value && (
          <button className={styles.cross} onClick={handleClear}>
            <CrossIcon />
          </button>
        )}
      </div>
    </div>
  );
};

export default TextField;
