import styled, { css } from 'styled-components';

interface PriceProps {
  confirmed: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;

  & + & {
    border-top: 1px solid #e5c231;
  }
`;

export const Price = styled.span<PriceProps>`
  ${({ confirmed }) => css`
    text-decoration: ${confirmed ? 'none' : 'line-through'};
  `}
`;
