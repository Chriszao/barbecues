import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 10px 0;

    & > input {
      width: 100%;
      border: none;
      border-radius: 10px;
      padding: 16px;
      background: ${theme.colors.lightGray};
      font-size: ${theme.font.sizes.small};
      box-shadow: 0px 10px 40px #00000056;
      outline: none;
    }
  `}
`;
