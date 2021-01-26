import React, { FormEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./styles.css";
import logoImg from "../../assets/images/logo.svg";
import api from "../../services/api";

function NewAccount() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [bio, setBio] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  function hangleNewAccount(e: FormEvent) {
    e.preventDefault();
    api
      .post("/users", {
        name,
        email,
        password,
        avatar,
        whatsapp,
        bio,
      })
      .then(() => {
        alert("Cadastro realizado com sucesso!");
        history.push("/");
      })
      .catch(() => alert("Erro no cadastro, verifique os dados..."));
  }

  return (
    <div className="logon">
      <div className="formContainer">
        <form className="form" onSubmit={hangleNewAccount}>
          <h1 className="tituloForm">Proffy - Seus dados</h1>
          <input
            name="name"
            placeholder="Nome completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="input"
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            name="avatar"
            placeholder="Avatar (URL de uma imagem sua)"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
            required
          />
          <input
            name="whatsapp"
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            required
          />
          <textarea
            name="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Sua biografia - como professor ou aluno"
            required
          ></textarea>

          <button type="submit">Criar minha conta</button>
          <Link to="/">Voltar</Link>
        </form>
      </div>
      <div className="image">
        <img src={logoImg} alt="Proffy" />
        <h2 className="titulo">Sua plataforma de estudos online.</h2>
      </div>
    </div>
  );
}

export default NewAccount;
