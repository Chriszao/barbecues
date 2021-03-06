import { IconButton } from 'components/IconButton/IconButton';
import styled, { css } from 'styled-components';

import barbecuePattern from '../../assets/background-bbq-pattern.svg';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    background: ${theme.colors.primary};
    background-image: url(${barbecuePattern});
    background-position: center;

    min-height: 14rem;
    position: relative;

    padding-top: ${theme.spacings.xLarge};

    h1 {
      font-size: ${theme.font.sizes.xLarge};
      font-weight: ${theme.font.extraBold};
    }
  `}
`;

export const BottomFade = styled.div`
  ${({ theme }) => css`
    height: 2.25rem;
    width: 100%;

    background: linear-gradient(
      180deg,
      transparent,
      ${theme.colors.primary} 100%
    );

    position: absolute;
    bottom: 0;
  `}
`;

export const LogOutButtonContainer = styled(IconButton)`
  ${({ theme }) => css`
    position: absolute;
    top: 40px;
    right: 40px;

    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      color: ${theme.colors.primaryDimmed};
    }
  `}
`;
