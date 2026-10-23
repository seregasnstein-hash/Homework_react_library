function CategoryFilter({ category, setCategory }) {
  return (
    <select
      className="category-filter"
      value={category}
      onChange={(event) => setCategory(event.target.value)}
    >
      <option value="Все категории">Все категории</option>
      <option value="Фэнтези">Фэнтези</option>
    </select>
  );
}

export default CategoryFilter;
