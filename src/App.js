import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import BookDetails from "./pages/BookDetails";
import EditBook from "./pages/EditBook";

function App() {
  return (
    <div className="App">
      <h1 className="app-title">Моя библиотека</h1>
      <BrowserRouter>
        <nav>
          <NavLink to="/">Каталог</NavLink>
          <NavLink to="/favorite">Избранное</NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/book/:id" element={<BookDetails/>}/>
          <Route path="/book/:id/edit" element={<EditBook />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
