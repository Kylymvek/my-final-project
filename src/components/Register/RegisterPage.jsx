import { Alert, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContextProvider";
import "./RegisterPage.css";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setConfpassword] = useState("");
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState();
  const navigate = useNavigate();

  const { signup } = useAuth();

  async function handleInputs() {
    try {
      if (password !== confpassword) {
        return setError("Пароли не совпадают!");
      }
      setError("");
      setSuccess("");
      setLoading(true);
      await signup(email, password);
      setSuccess("Регистрация прошла успешно! Войдите в аккаунт");
      setTimeout(() => {
        navigate("/auth");
      }, 500);
    } catch (e) {
      console.log(e);
      setError("Не удалось создать аккаунт. Проверьте на правильность");
    }
    setLoading(false);
    setEmail("");
    setPassword("");
    setConfpassword("");
  }

  // return (
  //   <div className="container-register-page">
  //     <h1 className="register-title">Регистрация</h1>
  //     {error && <Alert severity="error">{error}</Alert>}
  //     {success && <Alert severity="success">{success}</Alert>}
  //     <div className="register-email">
  //       <input
  //         type="email"
  //         placeholder="Email"
  //         value={email}
  //         onChange={e => setEmail(e.target.value)}
  //       />
  //     </div>
  //     <div className="register-password">
  //       <input
  //         type="password"
  //         placeholder="Password"
  //         value={password}
  //         onChange={e => setPassword(e.target.value)}
  //       />
  //     </div>
  //     <div className="register-conf-password">
  //       <input
  //         type="password"
  //         placeholder="Confirm password"
  //         value={confpassword}
  //         onChange={e => setConfpassword(e.target.value)}
  //       />
  //     </div>
  //     <div className="register-btn">
  //       <Button
  //         disabled={loading}
  //         onClick={handleInputs}
  //         variant="contained"
  //         sx={{ backgroundColor: "blue" }}>
  //         Sign Up
  //       </Button>
  //     </div>
  //     <p style={{ cursor: "pointer" }} onClick={() => navigate("/auth")}>
  //       Alredy have an account? Sign In.
  //     </p>
  //   </div>
  // );
  return (
    <div className="overlayRegister">
      <div className="login">
        <h2>Регистрация</h2>
        {error && <Alert severity="error">{error}</Alert>}
        {success && <Alert severity="success">{success}</Alert>}
        <input
          name="email"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          id="pw"
          name="password"
          placeholder="Пароль"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          name="confirm password"
          placeholder="Подтвердите пароль"
          type="password"
          value={confpassword}
          onChange={(e) => setConfpassword(e.target.value)}
        />

        <Button
          disabled={loading}
          onClick={handleInputs}
          variant="contained"
          sx={{
            width: "100%",
            backgroundColor: "rgb(130, 130, 238)",
            marginTop: "10px",
          }}
        >
          Зарегистрироваться
        </Button>
        <a className="forgot" href="/auth">
          Уже есть аккаунт? Войдите!
        </a>
      </div>
    </div>
  );
};

export default RegisterPage;
