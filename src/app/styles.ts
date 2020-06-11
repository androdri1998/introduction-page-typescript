import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    box-sizing: border-box;
  };
  html, body, #root {
    height: 100%;
  };
`;

export default GlobalStyle;
