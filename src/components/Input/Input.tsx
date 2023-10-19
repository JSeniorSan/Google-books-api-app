import { IInput } from "./Input.interfaces";
import styles from "../Card/Card.module.scss";
import cn from "classnames";
import { forwardRef, ForwardedRef } from "react";
const Input = forwardRef(
  ({ className, ...props }: IInput, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <input
        type="text"
        className={cn(styles.input, className)}
        ref={ref}
        {...props}
      />
    );
  }
);

export default Input;
