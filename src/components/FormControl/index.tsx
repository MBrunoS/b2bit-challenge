import React, { ReactNode } from "react";
import { Container } from "./styles";

type FormControlProps = {
  children: ReactNode;
};

const FormControl: React.FC<FormControlProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default FormControl;
