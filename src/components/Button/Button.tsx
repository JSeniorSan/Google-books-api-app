import cn from "classnames";
import styles from "./Button.module.scss";
import { IButton } from "./Button.interfaces";

function Button({ title, className, ...props }: IButton) {
  return (
    <button className={cn(styles.button, className)} {...props}>
      {title}
    </button>
  );
}

export default Button;
