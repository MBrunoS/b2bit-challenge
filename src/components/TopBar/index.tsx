import React from "react";
import { Button } from "../Button";
import { Container } from "./styles";

type TopBarProps = {
  handleClick: () => void;
};

const TopBar: React.FC<TopBarProps> = ({ handleClick }) => {
  return (
    <Container>
      <Button onClick={handleClick}>Logout</Button>
    </Container>
  );
};

export default TopBar;
