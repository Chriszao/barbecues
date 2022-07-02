import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
  `}
  flex: 1;
`;

export const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  ${({ theme }) => css`
    width: 50vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
      color: ${theme.colors.black};
      font-size: 3vw;
    }

    img {
      width: 35vw;
    }

    @media only screen and (max-width: 600px) {
      & > h1 {
        display: none;
      }

      width: 100%;
      height: auto;

      & > img {
        width: 50vw;
      }
    }
  `}
`;

export const RightContainer = styled.div`
  width: 50vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 600px) {
    width: 100%;
    height: auto;
  }
`;

export const CardLogin = styled.div`
  ${({ theme }) => css`
    width: 60%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    padding: 30px 35px;

    background: ${theme.colors.primaryLightened};

    border-radius: 20px;
    box-shadow: 0px 10px 40px #00000056;

    & > form {
      width: 100%;
      gap: 8px;
      display: flex;
      flex-direction: column;
    }

    & > h1 {
      color: ${theme.colors.black};
      font-weight: ${theme.font.extraBold};
      margin: 0;
    }

    @media only screen and (max-width: 950px) {
      width: 85%;
    }

    @media only screen and (max-width: 600px) {
      width: 90%;
    }
  `}
`;

export const LoginFooter = styled.footer`
  display: flex;
  justify-content: center;
  margin-top: -4rem;

  @media only screen and (max-width: 600px) {
    margin-top: 2rem;
  }
`;
