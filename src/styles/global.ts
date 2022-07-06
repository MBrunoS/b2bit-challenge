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

`;
