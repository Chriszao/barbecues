import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.button`
  ${({ theme }) => css`
    position: fixed;
    bottom: 50px;
    right: 60px;
    width: 60px;
    height: 60px;
    cursor: pointer;
    border: none;

    background: ${theme.colors.primary};
    border-radius: 50%;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);

    ${media.lessThan('medium')`
      z-index: 2;
      right: 30px;
      bottom: 25px;
    `}

    & > span {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      transition: all 0.3s ease-in-out;

      &:hover {
        transform: rotate(135deg);
      }
    }
  `}
`;
