import styled from "styled-components";

type ContainerProps = {
  shadowSize?: "sm" | "lg";
};

export const Container = styled.div<ContainerProps>`
  background-color: white;
  min-width: 20vw;
  padding: 2.5rem 1.625rem;
  border-radius: 0.75rem;
  text-align: center;
  box-shadow: ${({ shadowSize = "sm" }) =>
    shadowSize === "sm"
      ? `0 3px 4px 0 rgba(0,0,0,0.14), 0 3px 3px -2px rgba(0,0,0,0.12), 0 1px 8px 0 rgba(0,0,0,0.20)`
      : `0 24px 38px 3px rgba(0, 0, 0, 0.14),
    0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2)`};
`;
