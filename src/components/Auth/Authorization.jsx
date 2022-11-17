import { Alert, Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContextProvider";

const Authorization = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { login } = useAuth();

  async function handleInputs() {
    try {
      setSuccess("");
      setError("");
      setLoading(true);
      await login(email, password);
      setSuccess("Добро пожаловать!");
      setTimeout(() => {
        navigate("/");
      }, 500);
    } catch (e) {
      console.log(e);
      setError("Не получилось войти в аккаунт");
    }
    setLoading(false);
  }
  // return (
  //   <div>
  //     <h1>Вход через аккаунт</h1>
  //     {error && <Alert severity="error">{error}</Alert>}
  //     {success && <Alert severity="success">{success}</Alert>}
  //     <input
  //       type="email"
  //       placeholder="Email"
  //       value={email}
  //       onChange={e => setEmail(e.target.value)}
  //     />
  //     <br />
  //     <input
  //       type="password"
  //       placeholder="Password"
  //       value={password}
  //       onChange={e => setPassword(e.target.value)}
  //     />
  //     <br />
  //     <Button
  //       disabled={loading}
  //       onClick={() => handleInputs()}
  //       sx={{ backgroundColor: "blue", color: "white" }}>
  //       Log In
  //     </Button>
  //     <p style={{ cursor: "pointer" }} onClick={() => navigate("/register")}>
  //       Аккаунтун жокпу? Анда сибастьян на Регистрацию!
  //     </p>
  //   </div>
  // );

  return (
    <div className="overlayRegister">
      <div className="login">
        <h2>Вход через аккаунт</h2>
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
          Войти
        </Button>
        <a className="forgot" href="/register">
          Нет аккаунта? Зарегистрируйся!
        </a>
      </div>
    </div>
  );
};

export default Authorization;
