import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  html {
    box-sizing: border-box;
    /* font-size: 62.5%; */
    min-width: 320px;
  }
  body {
    /* overflow-y: hidden; */
    padding: 1.4rem;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  * { font-family: 'Helvetica', "Arial", 'Sans-serif';}
  a { cursor: pointer; text-decoration: none; }
`;
