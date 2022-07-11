import styled, { css } from 'styled-components';

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    margin-top: auto;
    margin-bottom: ${theme.spacings.medium};
    display: flex;
    justify-content: center;
  `}
`;
