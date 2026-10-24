import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();

    setError("");
    setSuccess("");

    if (!name.trim() || !email.trim() || !password.trim()) {
      setError("Заполните все поля");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.some((user) => user.email === email.trim());

    if (userExists) {
      setError("Пользователь с таким email уже зарегистрирован");
      return;
    }
    const newUser = {
      name: name.trim(),
      email: email.trim(),
      password,
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    setSuccess("Регистрация прошла успешно");
    navigate("/login")
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="auth-form">
      <h1>Регистрация</h1>

      <form onSubmit={handleSubmit}>
        <label>Имя</label>
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
        />

        <label>Email</label>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="email"
        />

        <label>Пароль</label>
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
        />
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <button type="submit">Зарегистрироваться</button>
      </form>
      <p>
        Уже есть аккаунт? <Link to="/login">Войти</Link>
      </p>
    </div>
  );
}

export default Register;
