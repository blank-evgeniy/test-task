import { classNames } from "@/lib/classNames";
import styles from "./Category.module.css";

interface CategoryProps {
  className?: string;
  children: React.ReactNode;
}

const Category = ({ className, children }: CategoryProps) => {
  return (
    <div className={classNames(styles.category, {}, [className])}>
      {children}
    </div>
  );
};

export default Category;
