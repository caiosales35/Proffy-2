import React, { FormEvent, useState } from "react";

import "./styles.css";
import logoImg from "../../assets/images/logo.svg";
import api from "../../services/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function signIn(e: FormEvent) {
    e.preventDefault();
    api
      .post("/login", {
        email,
        password,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => alert("Email ou senha incorretos..."));

    setEmail("");
    setPassword("");
  }

  return (
    <div className="logon">
      <div className="image">
        <img src={logoImg} alt="Proffy" />
        <h2 className="titulo">Sua plataforma de estudos online.</h2>
      </div>
      <div className="formContainer">
        <form className="form" onSubmit={signIn}>
          <h1 className="tituloForm">Proffy - login</h1>
          <input
            className="input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input"
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/*
          <div className="connected">
            <input type="checkbox" value="checked" />
            <label htmlFor="vehicle1"> Continuar conectado</label>
          </div>
          */}
          <button type="submit">Entrar</button>
          <a>Esqueci minha senha</a>
          <a>Cadastre-se de graça</a>
        </form>
      </div>
    </div>
  );
}

export default Login;
