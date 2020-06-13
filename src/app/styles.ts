import { createGlobalStyle } from "styled-components";
import { IGlobalStyle } from "./AppTypes";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    box-sizing: border-box;
  };
  html, body, #root {
    height: 100%;
    background: ${(props: IGlobalStyle) => props.background};
  };
`;

export default GlobalStyle;
