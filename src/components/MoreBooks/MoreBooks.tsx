import { useSelector } from "react-redux";
import { useAppDispatch } from "../../features/redux-hooks";
import Button from "../Button/Button";
import {
  BooksCategory,
  BooksRequest,
  BooksSecondSelect,
  BooksSelector,
} from "../../features/Books/BooksSelectors";
import { getBooks } from "../../features/Books/BooksSlice";

function MoreBooks() {
  const category = useSelector(BooksCategory);
  const secondSelect = useSelector(BooksSecondSelect);
  const arrayData = useSelector(BooksSelector);
  const dispatch = useAppDispatch();
  const booksRequest = useSelector(BooksRequest);
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(
      getBooks({
        pag: arrayData.length,
        title: booksRequest,
        selectCategorySelect: category,
        secondSelect: secondSelect,
      })
    );
  };
  return (
    <div>
      <Button title="Load more" onClick={onClick} />
    </div>
  );
}

export default MoreBooks;
