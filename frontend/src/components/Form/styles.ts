import { Button } from 'components/Button';
import { darken } from 'polished';
import styled, { css } from 'styled-components';

export const ParticipantsContainer = styled.div`
  min-height: 100px;
`;

export const Container = styled.div`
  p {
    margin-top: 16px;
  }
`;

export const FormContent = styled.div`
  .fields-group {
    display: flex;
    align-items: flex-start;
    gap: 20px;
  }

  & > button {
    margin: 16px 0 0;
  }
`;

export const ContributionValueContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 40px;
`;

interface ContributionButtonProps {
  isSelected: boolean;
}

export const ContributionButton = styled(Button)<ContributionButtonProps>`
  display: flex;
  align-items: center;
  flex-direction: column;

  ${({ theme, isSelected }) => css`
    background: ${theme.colors.lightGray};
    color: ${theme.colors.black};

    &:hover {
      background: ${darken(0.05, `${theme.colors.lightGray}`)};
      color: ${theme.colors.black};
    }

    ${isSelected &&
    css`
      color: ${theme.colors.white};
      background: ${theme.colors.black};
    `}
  `}

  margin: 0;
  padding: 8px 0;
  width: 300px;
`;
