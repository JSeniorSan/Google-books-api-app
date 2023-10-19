import { ForwardedRef, forwardRef } from "react";
import { ICard } from "./Card.interfaces";
import styles from "./Card.module.scss";
import cn from "classnames";
const Card = forwardRef(
  (
    { category, title, authors, img, className, ...props }: ICard,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const article = (str: string) => {
      return str[0].toUpperCase() + str.slice(1, -1).toLowerCase();
    };
    return (
      <div className={cn(styles.cardUi, className)} ref={ref} {...props}>
        <img src={img} alt={title} className={styles.img} />
        <div className={styles.category}>{category && article(category)}</div>
        <div className={styles.title}>{title && article(title)}</div>
        <div className={styles.authors}>{authors}</div>
      </div>
    );
  }
);

export default Card;
