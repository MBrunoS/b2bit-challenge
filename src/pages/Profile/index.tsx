import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../../components/Card";
import { useAuthContext } from "../../context/AuthContext";

// import { Container } from './styles';

export const Profile: React.FC = () => {
  const { token } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (token === null) {
      navigate("/");
    }
  }, []);

  return <Card>Profile</Card>;
};
