import styled, { css } from 'styled-components';

interface WrapperProps {
  haveMask?: boolean;
  fullWidth?: boolean;
  isWithError?: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, haveMask, fullWidth, isWithError }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 10px 0;
    position: relative;
    border-radius: 10px;
    ${fullWidth &&
    css`
      width: 100%;
    `}

    & > input {
      width: 100%;
      border: none;
      border-radius: 10px;
      padding: ${haveMask ? '16px 16px 16px 48px' : '16px'};
      background: ${theme.colors.lightGray};
      font-size: ${theme.font.sizes.small};
      outline: none;
      transition: all 0.2s ease-in-out;

      &::placeholder {
        ${haveMask &&
        css`
          color: ${theme.colors.black};
        `}
      }

      &:focus {
        box-shadow: 0px 10px 40px #00000056;
      }

      ${isWithError &&
      css`
        border: 1px solid red;

        &::placeholder {
          color: ${theme.colors.error};
        }
      `}
    }

    & > textarea {
      width: 100%;
      border: none;
      border-radius: 10px;
      padding: 16px;
      background: ${theme.colors.lightGray};
      font-size: ${theme.font.sizes.small};
      font-family: ${theme.font.family};
      outline: none;
      transition: all 0.2s ease-in-out;

      &:focus {
        box-shadow: 0px 10px 40px #00000056;
      }
    }
  `}
`;

export const ErrorHelperText = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding-left: 8px;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.error};
  `}
`;

export const Adornment = styled.div`
  position: absolute;
  left: 1.125rem;
  top: 2.563rem;
`;

export const Label = styled.label`
  ${({ theme }) => css`
    padding-left: 10px;
    font-size: ${theme.font.sizes.small};
  `}
`;
