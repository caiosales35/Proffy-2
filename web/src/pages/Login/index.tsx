import React from "react";

import "./styles.css";
import logoImg from "../../assets/images/logo.svg";

function Login() {
  return (
    <div className="logon">
      <div className="image">
        <img src={logoImg} alt="Proffy" />
        <h2 className="titulo">Sua plataforma de estudos online.</h2>
      </div>
      <div className="formContainer">
        <form className="form">
          <h1 className="tituloForm">Proffy - login</h1>
          <input className="input" type="email" placeholder="Email" />
          <input className="input" type="text" placeholder="Senha" />
          <div className="connected">
            <input type="checkbox" value="connected" />
            <label htmlFor="vehicle1"> Continuar conectado</label>
          </div>
          <button type="submit">Entrar</button>
          <a>Esqueci minha senha</a>
          <a>Cadastre-se de graça</a>
        </form>
      </div>
    </div>
  );
}

export default Login;
