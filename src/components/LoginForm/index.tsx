import React from "react";
import { Button, Container, FormControl, Input } from "./styles";

export const LoginForm: React.FC = () => {
  return (
    <Container>
      <FormControl>
        <label htmlFor="email">E-mail</label>
        <Input type="text" id="email" placeholder="@gmail.com" />
      </FormControl>

      <FormControl>
        <label htmlFor="password">Password</label>
        <Input type="password" placeholder="****************" />
      </FormControl>

      <Button type="submit">Sign In</Button>
    </Container>
  );
};
