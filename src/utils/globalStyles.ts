import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-size: 14px;
    background: ${({ theme }: any) => theme.colors.body.default};
    color: ${({ theme }: any) => theme.colors.body.text};
    transition: all 0.50s linear;
    font-family: Noto Serif JP, Roboto, -apple-system, BlinkMacSystemFont, Segoe UI,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
    sans-serif;
    line-height: 1.5;
    overflow-x: hidden;
  }

  html {
    font-size: 16px;
  }
  
`;