import Card from "../Card/Card";
import styles from "./CardList.module.scss";
import cn from "classnames";
import { ICardList } from "./CardList.interfaces";
import { useSelector } from "react-redux";
import { CSSProperties } from "react";
import {
  BooksCount,
  BooksErrors,
  BooksSelector,
  BooksStatus,
} from "../../features/Books/BooksSelectors";
import { Link } from "react-router-dom";
import MoreBooks from "../MoreBooks/MoreBooks";
import { useEffect, useRef } from "react";

import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
function CardList({ className, ...props }: ICardList) {
  const arrayData = useSelector(BooksSelector);
  const booksErrors = useSelector(BooksErrors);
  const booksStatus = useSelector(BooksStatus);
  const booksCount = useSelector(BooksCount);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.scrollIntoView({
      behavior: "instant",
      block: "start",
    });
  }, [arrayData]);

  return (
    <section className={cn(styles.cardContainer, className)} {...props}>
      {booksStatus === "loading" && (
        <div className={styles.loading}>
          <ClipLoader
            color={"purple"}
            loading={booksStatus === "loading"}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
      {booksStatus === "rejected" && <div>{booksErrors}</div>}
      {booksStatus === "receved" && (
        <div className={cn(styles.ListPage)}>
          <div className={styles.result}>
            {"Found " + booksCount + " result"}
          </div>
          <div className={styles.cardList}>
            {arrayData.length > 0 &&
              arrayData.map((el, i) => {
                if (i === arrayData.length - 30) {
                  return (
                    <Link
                      to={"/" + el.id}
                      key={Math.random()}
                      className={styles.link}
                    >
                      <Card
                        ref={ref}
                        category={
                          el.volumeInfo.categories &&
                          el.volumeInfo.categories[0]
                        }
                        title={el.volumeInfo.title}
                        authors={el.volumeInfo.authors}
                        img={el.volumeInfo.imageLinks?.thumbnail}
                      />
                    </Link>
                  );
                }
                return (
                  <Link
                    to={el.id ? "/" + el.id : "/books"}
                    key={Math.random()}
                    className={styles.link}
                  >
                    <Card
                      category={
                        el.volumeInfo.categories && el.volumeInfo.categories[0]
                      }
                      title={el.volumeInfo.title}
                      authors={el.volumeInfo.authors}
                      img={el.volumeInfo.imageLinks?.thumbnail}
                    />
                  </Link>
                );
              })}
          </div>
          <MoreBooks />
        </div>
      )}
    </section>
  );
}

export default CardList;
