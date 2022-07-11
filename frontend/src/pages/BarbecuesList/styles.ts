import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import type { ContainerProps } from './types';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  ${({ theme }) => css`
    background: ${theme.colors.white};
  `}
`;

export const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;

  ${media.greaterThan('huge')`
      grid-template-columns: repeat(4, 1fr);
  `}

  ${media.lessThan('large')`
      grid-template-columns: repeat(2, 1fr);
  `}

  ${media.lessThan('medium')`
      grid-template-columns: repeat(1, 1fr);
  `}
`;

export const Container = styled.div<ContainerProps>`
  ${({ isListEmpty }) => css`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    margin: -3rem 4rem 2rem;
    z-index: 1;

    ${isListEmpty &&
    css`
      align-items: center;
      margin: 0;
    `}
  `}
`;
