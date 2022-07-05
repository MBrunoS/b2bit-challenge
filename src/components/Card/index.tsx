import React, { ReactNode } from "react";
import { Container } from "./styles";

type CardProps = {
  shadowSize?: "sm" | "lg";
  children: ReactNode;
};

export const Card: React.FC<CardProps> = ({ shadowSize, children }) => {
  return <Container shadowSize={shadowSize}>{children}</Container>;
};
