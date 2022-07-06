import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0%;
    font-family: 'Kantumruy Pro', sans-serif;
    color: #262626;
    background-color: #ebeff3;

    & > div {
      display: grid;
      min-height: 100vh;
      place-items: center;
    }
  }

  input {
    background-color: #f1f1f1;
    border-radius: 0.5rem;
    font-family: inherit;
    font-size: 1rem;
    padding: 1rem;
    border: 0;
    width: 100%;
  }

  button {
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
  }
`;
