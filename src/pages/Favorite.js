import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../redux/favoriteSlice";

function Favorite() {
  const books = useSelector((state) => state.books);
  const favorite = useSelector((state) => state.favorite);
  const dispatch = useDispatch();

  const favoriteBooks = books.filter((book) => favorite.includes(book.id));
  return (
    <div>
      <h1>Избраное</h1>
      {favorite.length === 0 ? (
        <p className="no-books"> В избранных ничего нет</p>
      ) : (
        <section>
          {favoriteBooks.map((book) => (
            <div key={book.id}>
              <img src={book.image} alt={book.title} />
              <h2>{book.title}</h2>
              <p>{book.description}</p>
              <button className="remove-favorite" onClick={() => dispatch(toggleFavorite(book.id))}>
                Удалить из избранных
              </button>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}

export default Favorite;
