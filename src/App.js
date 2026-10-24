import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import BookDetails from "./pages/BookDetails";
import EditBook from "./pages/EditBook";
import AddBook from "./pages/AddBook";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useState } from "react";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [currentUser, setCurrentUser] = useState(() => {
    return JSON.parse(localStorage.getItem("currentUser")) || null;
  });
  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
  };

  return (
    <div className="App">
      <h1 className="app-title">Моя библиотека</h1>
      <BrowserRouter>
        <nav>
          <NavLink to="/">Каталог</NavLink>
          {currentUser && (
            <>
              <NavLink to="/favorite">Избранное</NavLink>
              <NavLink to="/book/add">Добавить</NavLink>
            </>
          )}
          {currentUser ? (
            <>
              <div className="user-panel">
                <span className="user-name">Привет, {currentUser.name}</span>

                <button className="logout-button" onClick={handleLogout}>
                  Выйти
                </button>
              </div>
            </>
          ) : (
            <>
              <NavLink to="/login">Войти</NavLink>
            </>
          )}
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/favorite"
            element={
              <ProtectedRoute currentUser={currentUser}>
                <Favorite />
              </ProtectedRoute>
            }
          />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route
            path="/book/:id/edit"
            element={
              <ProtectedRoute currentUser={currentUser}>
                <EditBook />
              </ProtectedRoute>
            }
          />
          <Route
            path="/book/add"
            element={
              <ProtectedRoute currentUser={currentUser}>
                <AddBook />
              </ProtectedRoute>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/login"
            element={<Login setCurrentUser={setCurrentUser} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
