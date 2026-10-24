function CategoryFilter({ category, setCategory, categories }) {
  return (
    <select
      className="category-filter"
      value={category}
      onChange={(event) => setCategory(event.target.value)}
    >
      <option value="Все категории">Все категории</option>
      {categories.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}

export default CategoryFilter;
