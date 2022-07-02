import styled, { css } from 'styled-components';

export const Wrapper = styled.button`
  width: 100%;

  padding: 16px 0;
  margin: 25px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  outline: none;
  text-transform: uppercase;

  ${({ theme }) => css`
    font-weight: ${theme.font.extraBold};
    letter-spacing: 2px;

    color: ${theme.colors.white};
    background: ${theme.colors.black};
    box-shadow: 0px 10px 40px -12px ${theme.colors.primaryDimmed};
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${theme.colors.primaryLightened};
    }
  `}
`;
