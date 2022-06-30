import React from "react";
import { Container } from "./styles";

export const LoginForm: React.FC = () => {
  return (
    <Container>
      <div>
        <label htmlFor="email">E-mail</label>
        <input type="text" id="email" />
      </div>
      <div>
        <input type="password" placeholder="Senha" />
      </div>
    </Container>
  );
};
