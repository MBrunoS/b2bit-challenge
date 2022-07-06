import React from "react";
import { Container } from "./styles";

type TopBarProps = {
  handleClick: () => void;
};

const TopBar: React.FC<TopBarProps> = ({ handleClick }) => {
  return (
    <Container>
      <button onClick={handleClick}>Logout</button>
    </Container>
  );
};

export default TopBar;
