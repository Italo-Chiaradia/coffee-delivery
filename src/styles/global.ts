import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme['base-text']}
  }

  body, input, button, textarea {
    font-family: 'Roboto', sans-serif;
    font-size: '16px';
    line-height: 1.3;
  } 

`
