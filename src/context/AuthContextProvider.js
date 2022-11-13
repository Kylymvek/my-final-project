import React, { useState } from "react";

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState("");

  // очищение ошибок
  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  // очищение инпутов
  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  // функция для регистрации
  const handleSignUp = () => {};

  return <div></div>;
};

export default AuthContextProvider;
