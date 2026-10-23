import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editBook } from "../redux/booksSlice";
import { useNavigate } from "react-router-dom";

function EditBook() {
  const { id } = useParams();
  const books = useSelector((state) => state.books);
  const book = books.find((book) => book.id === Number(id));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const [title, setTitle] = useState(book?.title || "");
  const [year, setYear] = useState(book?.year || "");
  const [description, setDescription] = useState(book?.description || "");
  const [image, setImage] = useState(book?.image || "");
  const [category, setCategory] = useState(book?.category || "");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !title.trim() ||
      !year ||
      !description.trim() ||
      !image.trim() ||
      !category.trim()
    ) {
      setError("Заполните все обязательные поля");
      return;
    }

    setError("");

    dispatch(
      editBook({
        id: book.id,
        title,
        year: Number(year),
        description,
        image,
        category,
      }),
    );
    navigate(`/book/${book.id}`);
  };
  if (!book) {
    return <h2>Книга не найдена</h2>;
  }

  return (
    <div className="edit-book">
      <h1>Редактирование книги</h1>

      <form onSubmit={handleSubmit}>
        <label>Название:</label>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <label>Год выпуска:</label>
        <input
          type="number"
          value={year}
          onChange={(event) => setYear(event.target.value)}
        />

        <label>Описание:</label>
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <label>Категория:</label>
        <input
          type="text"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <label>Ссылка на изображение:</label>
        <input
          type="text"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Сохранить изменения</button>
      </form>
    </div>
  );
}

export default EditBook;
