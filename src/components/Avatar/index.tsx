import React from "react";
import { Container } from "./styles";

type AvatatarProps = {
  image: string;
  name: string;
};

const Avatar: React.FC<AvatatarProps> = ({ image, name }) => {
  return (
    <Container>
      <p>Profile picture</p>
      <img src={image} alt={name} />
    </Container>
  );
};

export default Avatar;
