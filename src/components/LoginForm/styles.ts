import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-flow: column wrap;
  font-size: 1.25rem;
  font-weight: 500;
  gap: 1.75rem;
`;

export const FormControl = styled.div`
  display: flex;
  flex-flow: column wrap;
  gap: 0.75rem;
  text-align: start;
`;

export const ErrorBox = styled.div`
  color: red;
  font-size: small;
  text-align: center;
`;
