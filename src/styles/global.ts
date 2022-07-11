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

    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }

    ::-webkit-scrollbar-track {
      border-radius: 0.25rem;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #bababa;
      border-radius: 0.25rem;
    }

    #root {
      display: flex;
      height: 100vh;
      width: 100vw;
    }
  `}
`;

export default GlobalStyles;
