import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${({ theme }) => css`
    body,
    input {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
    }

    #root {
      display: flex;
      min-height: 100vh;
      min-width: 100vw;
    }
  `}
`;

export default GlobalStyles;
