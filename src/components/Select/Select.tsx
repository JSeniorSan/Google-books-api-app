import { ISelect } from "./Select.interfaces";
import styles from "./Select.module.scss";
import cn from "classnames";
function Select({ optionsData, className, ...props }: ISelect) {
  return (
    <select className={cn(styles.select, className)} {...props}>
      {optionsData.map((elem, i) => {
        if (elem === "all") {
          return (
            <option value={""} className={styles.option} key={i}>
              {elem}
            </option>
          );
        }
        return (
          <option value={elem} className={styles.option} key={i}>
            {elem}
          </option>
        );
      })}
    </select>
  );
}

export default Select;
