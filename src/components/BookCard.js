import { Link } from "react-router-dom";

function BookCard({ book, isFavorite, onToggleFavorite }) {
  return (
    <div>
      <img src={book.image} alt={book.title} />
      <h2>{book.title}</h2>
      <Link className="book-link" to={`/book/${book.id}`}>Подробнее</Link>
      <button onClick={onToggleFavorite}>
        {isFavorite ? "Убрать из избранного" : "Добавить в избранное"}
      </button>
    </div>
  );
}

export default BookCard;
