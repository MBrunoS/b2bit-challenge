import styled from "styled-components";

export const Container = styled.form`
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

export const Input = styled.input`
  background-color: #f1f1f1;
  border-radius: 0.5rem;
  font-family: inherit;
  font-size: 1rem;
  padding: 1rem;
  border: 0;
  width: 100%;
`;

export const Button = styled.button`
  background-color: #02274f;
  border: 0;
  border-radius: 0.5rem;
  color: white;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 500;
  padding: 1rem;
`;
