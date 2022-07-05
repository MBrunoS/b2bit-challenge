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

  input {
    background-color: #f1f1f1;
    border-radius: 0.5rem;
    font-family: inherit;
    font-size: 1rem;
    padding: 1rem;
    border: 0;
    width: 100%;
  }
`;

export const ErrorBox = styled.div`
  color: red;
  font-size: small;
  text-align: center;
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
  cursor: pointer;

  &:hover {
    filter: brightness(0.85);
  }

  &:disabled,
  &:active {
    filter: brightness(0.6);
  }

  &:disabled {
    cursor: no-drop;
  }

  &:disabled::after {
    content: "";
    position: absolute;
    width: 1rem;
    height: 1rem;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border: 0.25rem solid transparent;
    border-top-color: #ffffff;
    border-radius: 50%;
    animation: button-loading-spinner 1s ease infinite;
  }

  @keyframes button-loading-spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
