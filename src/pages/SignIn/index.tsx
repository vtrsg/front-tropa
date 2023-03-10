import React, { useState } from "react";
import { FormArea } from "./styled";
import logo from "../../pngs/logo.png";
import computer from "../../pngs/computer.png";

import { FormContainer } from "../../components/layout/FormContainer";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <FormContainer>
      <FormArea>
        <div className="menu">
          <img src={logo} alt="logo" />
          <div className="menu-formContainer">
            <h2>Bem vindo ao <span>painel</span></h2>
            <form>
              <input
                type="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <input
                type="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button>Acessar</button>
            </form>
          </div>
        </div>
        <div className="image">
          <img src={computer} alt="computer" />
        </div>
      </FormArea>
    </FormContainer>
  );
};

export default SignIn;
