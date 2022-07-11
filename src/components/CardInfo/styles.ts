import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    top: 0px;
    position: relative;
    padding: 2rem 2rem 1.5rem;
    width: 18.75rem;
    border-radius: 5px;
    box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
    background: ${theme.colors.white};
    transition: all 0.2s ease-in-out;

    &:hover {
      cursor: pointer;
      box-shadow: 0px 2px 18px rgba(0, 0, 0, 0.25);
      top: -4px;
    }

    ${media.lessThan('medium')`
      &:hover {
        box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
        cursor: none;
      }
    `}
  `}
`;

export const CardHeader = styled.header`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;

    .action-buttons-container {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;

      span {
        font-weight: ${theme.font.extraBold};
        font-size: ${theme.font.sizes.medium};
      }

      .action-buttons {
        display: flex;
        gap: 4px;

        .icon {
          transition: all 0.3s ease-in-out;
        }

        .icon:hover {
          cursor: pointer;
          color: ${theme.colors.primary};
        }
      }
    }
  `}
`;

export const CardFooter = styled.footer`
  display: flex;
  justify-content: space-between;

  & .money-section,
  .group-persons-section {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;
