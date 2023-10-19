import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BooksSelector } from "../../features/Books/BooksSelectors";
import { useParams } from "react-router-dom";
import { IBooksData } from "../../features/Books/Books.interfaces";
function DetailComponent() {
  const param = useParams();
  console.log(param);

  const entities = useSelector(BooksSelector);
  const book = entities.find((bookEl: IBooksData) => {
    return param.title === bookEl.id;
  });

  return (
    <div>
      <Link to="/books">Back</Link>
      <div>{book?.volumeInfo.authors}</div>
      <div>{book?.volumeInfo.description}</div>
      <div>{book?.volumeInfo.authors}</div>
      <div>{book?.volumeInfo.authors}</div>
    </div>
  );
}

export default DetailComponent;
