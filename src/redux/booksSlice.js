import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("books")) || [
  {
    id: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9sDj5GpsoMQlv7jAGtpHdZPdfOA6L6MyjAAFFoc1rjQ&s=10",
    title: "Хоббит, или Туда и обратно",
    year: 1937,
    description: "Путешествие Бильбо Бэггинса к Одинокой горе.",
    category: "Фэнтези",
  },
  {
    id: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0AS8TF3NVYBlNZ4DDS9C0Zv6bsFx5SlYn9fuh69mKCw&s=10",
    title: "Братство Кольца",
    year: 1954,
    description: "Начало путешествия Фродо с Кольцом Всевластия.",
    category: "Фэнтези",
  },
  {
    id: 3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjWtzmUPgiRDubA7eOzaehAJVpKGG0_Jg9iVaOi7BtXA&s=10",
    title: "Две крепости",
    year: 1954,
    description: "Продолжение истории участников Братства.",
    category: "Фэнтези",
  },
  {
    id: 4,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjG8uo56zXksPs1Abl71nSjc-JVrbMgzqO9WJY44rzgA&s=10",
    title: "Возвращение короля",
    year: 1955,
    description: "Завершение истории Войны Кольца.",
    category: "Фэнтези",
  },
];

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    editBook: (state, action) => {
      const updatedBook = action.payload;

      const book = state.find((book) => book.id === updatedBook.id);

      if (book) {
        book.title = updatedBook.title;
        book.year = updatedBook.year;
        book.description = updatedBook.description;
        book.image = updatedBook.image;
        book.category = updatedBook.category;
      }
    },
    addBook: (state, action) => {
      const newBook = {
        id: Math.max(0, ...state.map((book) => book.id)) + 1,
        ...action.payload,
      };

      state.push(newBook);
    },
    deleteBook: (state, action) => {
      return state.filter((book) => book.id !== action.payload);
    },
  },
});

export const { editBook, addBook, deleteBook } = booksSlice.actions;
export default booksSlice.reducer;
