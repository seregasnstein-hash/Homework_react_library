import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteBook } from "../redux/booksSlice";

function BookDetails() {
  const { id } = useParams();
  const books = useSelector((state) => state.books);
  const book = books.find((book) => book.id === Number(id));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (!book) {
    return <h2>Книга не найдена</h2>;
  }

  return (
    <div className="book-details">
      <h2>Информация о книге</h2>
      <div key={book.id}>
        <img src={book.image} alt={book.title} />
        <h3>{book.title}</h3>
        <p>
          <strong>
            <i>Описание: </i>
          </strong>
          {book.description}
        </p>
        <p>
          <strong>
            <i>Год: </i>{" "}
          </strong>
          {book.year}
        </p>
        <p>
          <strong>
            <i>Категория: </i>{" "}
          </strong>
          {book.category}
        </p>
        <div className="btn-action">
          <Link className="book-link" to={`/book/${id}/edit`}>
            Редактировать книгу
          </Link>
          <button
          className="delete-book"
            onClick={() => {
              dispatch(deleteBook(book.id));
              navigate("/");
            }}
          >
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
}
export default BookDetails;
