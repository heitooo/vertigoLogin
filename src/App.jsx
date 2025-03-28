import { useState } from "react";
import logoImg from "./assets/logo.svg";

export function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErros] = useState({ email: "", password: "" });

  function handleSubmit(event) {
    event.preventDefault();
    let formIsValid = true;
    let newErros = { email: "", password: "" };

    //validaçao email//
    if (!email) {
      newErros.email = "O e-mail é obrigatório!";
      formIsValid = false;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      newErros.email = "Digite um e-mail válido!";
      formIsValid = false;
    }

    //validaçao senha//
    if (!password) {
      newErros.password = "A senha é obrigatória!";
      formIsValid = false;
    }
    if (password.length > 6) {
      newErros.password = "A senha deve conter ao menos 6 caracteres!";
      formIsValid = false;
    }
    if (!formIsValid) {
      setErros(newErros);
      return; //garante q o formulario n envie os dados em caso de erros
    }
  }

  return (
    <div className="container">
      <div className="s-form">
        <img src={logoImg} alt="Logo Vertigo" />

        <div className="content">
          <h1 className="title">Acesse a plataforma</h1>
          <p className="description">
            Faça login ou registre-se para começar a construir seus projetos
            ainda hoje.
          </p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={errors.email ? "error" : ""}
            />
            {errors.email && <span className="error">{errors.email}</span>}
            <div className="s-forgot-password">
              <label htmlFor="password">Senha</label>
              <a href="">Esqueceu a senha?</a>
            </div>
            <input
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={errors.password ? "error" : ""}
            />
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
            <button type="submit" className="sign-up-btn">
              Entrar
            </button>
          </form>
          <p className="sign-up">
            Ainda não tem uma conta? <a href="">Inscreva-se</a>
          </p>
        </div>
      </div>
      <div className="s-img" />
    </div>
  );
}
