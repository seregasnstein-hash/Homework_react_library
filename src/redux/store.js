import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./booksSlice.js";
import favoriteReducer from "./favoriteSlice.js";

export const store = configureStore({
  reducer: {
    books: booksReducer,
    favorite: favoriteReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();

  localStorage.setItem("favorite", JSON.stringify(state.favorite));
  localStorage.setItem("books", JSON.stringify(state.books));
});
