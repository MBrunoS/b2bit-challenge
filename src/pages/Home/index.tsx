import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { Card } from "../../components/Card";
import { LoginForm } from "../../components/LoginForm";
import { Img } from "./styles";
import logo from "../../assets/b2bit_logo.svg";

export const Home: React.FC = () => {
  const { token } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (token !== null) {
      navigate("/profile");
    }
  }, []);

  return (
    <Card shadowSize="lg">
      <Img src={logo} />
      <LoginForm />
    </Card>
  );
};
