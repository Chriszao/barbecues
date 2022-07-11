import { Button } from 'components/Button';
import styled, { css } from 'styled-components';

import type { GuestsListProps } from './types';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  ${({ theme }) => css`
    background: ${theme.colors.lightGray};
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: -3rem 4rem 2rem;
  z-index: 1;
  background: white;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0px 10px 40px #00000056;
`;

export const DateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ theme }) => css`
    > span.date {
      font-weight: ${theme.font.extraBold};
      font-size: ${theme.font.sizes.medium};
    }
  `}

  & .group-persons-section {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const PartyNameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;

  h3 {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 250px;
    height: 70.4px;
  }

  .icon-button-container {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    gap: 8px;

    > .money-icon {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
`;

export const RoundedButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  width: 32px;
  height: 32px;
  font-size: 14px;
  border-radius: 50%;
`;

export const GuestsList = styled.div<GuestsListProps>`
  ${({ isListEmpty }) => css`
    margin-top: 8px;
    max-height: 25rem;
    overflow-y: auto;
    display: flex;
    flex: 1;
    flex-direction: column;

    ${isListEmpty &&
    css`
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: center;
    `}

    ::-webkit-scrollbar {
      display: none;
    }
  `}
`;

export const GuestItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FormContainer = styled.div`
  > button {
    margin: 25px 0;
  }
`;
