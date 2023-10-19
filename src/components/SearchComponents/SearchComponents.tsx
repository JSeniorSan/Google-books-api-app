import { Link } from "react-router-dom";
import { KeyboardEvent, useState } from "react";
import Select from "../Select/Select";
import Input from "../Input/Input";
import styles from "./SearchComponents.module.scss";
import { useRef } from "react";
import {
  addRequestTitle,
  clearBooksData,
  getBooks,
} from "../../features/Books/BooksSlice";
import { useAppDispatch } from "../../features/redux-hooks";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";

function SearchComponents() {
  const [categoryState, setCategoryState] = useState<string>("");
  const [selectSecondState, setSelectSecondState] =
    useState<string>("relevance");
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      onClick();
    }
  };

  const onClick = () => {
    dispatch(clearBooksData());
    if (inputRef.current) {
      dispatch(addRequestTitle(inputRef.current.value));
    }

    if (inputRef.current) {
      dispatch(
        getBooks({
          title: inputRef.current.value,
          pag: 0,
          secondSelect: selectSecondState,
          selectCategorySelect: categoryState,
        })
      );
    }
  };

  const selectCategory = [
    "all",
    "art",
    "biography",
    "computers",
    "history",
    "medical",
    "poetry",
  ];
  const selectState = ["relevance", "newest"];

  // const debounsedFetch = useMemo(() => debounce(() => onClick(), 0), []);

  return (
    <Box>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h1">Search for books</Typography>
        </Toolbar>
        <div className={styles.form}>
          <Input
            placeholder="Search..."
            className={styles.Input}
            ref={inputRef}
            onKeyDown={handleKeyDown}
          />
          <label>Select category:</label>
          <Select
            className={styles.selectCat}
            optionsData={selectCategory}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setCategoryState(e.target.value)
            }
          />
          <label>Select status:</label>
          <Select
            className={styles.selectState}
            optionsData={selectState}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              setSelectSecondState(e.target.value);
            }}
          />

          <IconButton onClick={onClick} className={styles.btn}>
            <Link
              to={"/books"}
              style={{ textDecoration: "none", color: "white" }}
            >
              Find
            </Link>
          </IconButton>
        </div>
      </AppBar>
    </Box>
  );
}

export default SearchComponents;
