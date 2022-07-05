import React, { useContext } from "react";
import { Card } from "../../components/Card";
import { LoginForm } from "../../components/LoginForm";
import { Container } from "./styles";
import logo from "../../assets/b2bit_logo.svg";
import { AuthContext } from "../../context/AuthContext";

export const Home: React.FC = () => {
  const { token } = useContext(AuthContext);

  console.log({ token });

  return (
    <Container>
      <Card>
        <img src={logo} />
        <LoginForm />
      </Card>
    </Container>
  );
};
