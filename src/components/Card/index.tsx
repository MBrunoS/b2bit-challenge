import React, { ReactNode } from "react";
import { Container } from "./styles";

type CardProps = {
  children: ReactNode;
};

export const Card: React.FC<CardProps> = ({ children }) => {
  return <Container>{children}</Container>;
};
