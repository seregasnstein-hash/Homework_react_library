import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice";

function AddBook() {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const dispatch = useDispatch();

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
      setSuccess("");
      return;
    }

    setError("");

    dispatch(
      addBook({
        title,
        year: Number(year),
        description,
        image,
        category,
      }),
    );

    setTitle("");
    setYear("");
    setDescription("");
    setImage("");
    setCategory("");

    setSuccess("Книга успешно добавлена");
  };

  return (
    <div className="add-book">
      <h1>Добавить книгу</h1>

      <form onSubmit={handleSubmit}>
        <label>Название книги</label>
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <label>Год издания</label>
        <input
          type="number"
          value={year}
          onChange={(event) => setYear(event.target.value)}
        />

        <label>Описание</label>
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <label>Ссылка на обложку</label>
        <input
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />

        <label>Категория</label>
        <input
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <button type="submit">Добавить книгу</button>
      </form>
    </div>
  );
}

export default AddBook;
