
function BookSearch({ search, setSearch }) {
  return (
    <input
      className="book-search"
      type="text"
      placeholder="Поиск по названию книги..."
      value={search}
      onChange={(event) => setSearch(event.target.value)}
    />
  );
}

export default BookSearch;
