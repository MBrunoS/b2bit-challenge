import React from "react";
import { Card } from "../../components/Card";
import { LoginForm } from "../../components/LoginForm";
import { Container } from "./styles";
import logo from "../../assets/b2bit_logo.svg";

export const Home: React.FC = () => {
  return (
    <Container>
      <Card>
        <img src={logo} />
        <LoginForm />
      </Card>
    </Container>
  );
};
