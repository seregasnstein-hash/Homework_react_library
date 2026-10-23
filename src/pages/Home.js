import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../redux/favoriteSlice";
import { useState } from "react";
import BookSearch from "../components/BookSearch";
import CategoryFilter from "../components/CategoryFilter";
import BookCard from "../components/BookCard";

function Home() {
  const books = useSelector((state) => state.books);
  const favorite = useSelector((state) => state.favorite);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Все категории");

  const filteredBooks = books.filter((book) => {
    const matchesSearch = book.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "Все категории" || book.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <BookSearch search={search} setSearch={setSearch} />
      <CategoryFilter category={category} setCategory={setCategory} />
      {filteredBooks.length === 0 && (
        <p className="no-books">Книги не найдены</p>
      )}
      <section className="books-grid">
        {filteredBooks.map((book) => (
          <div key={book.id}>
            <BookCard
              book={book}
              isFavorite={favorite.includes(book.id)}
              onToggleFavorite={() => dispatch(toggleFavorite(book.id))}
            />
          </div>
        ))}
      </section>
    </div>
  );
}

export default Home;
