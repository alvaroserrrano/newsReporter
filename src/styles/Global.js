import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
 html {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
  }
  *, *:before, *:after {
    -webkit-box-sizing: inherit;
            box-sizing: inherit;
  }
  body {
    margin: 0;
    padding: 0;
    line-height: 1;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  a {
    color: ${({ theme }) => theme.text};
  }
`;
