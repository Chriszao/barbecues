import styled, { css } from 'styled-components';

interface CheckBoxProps {
  isChecked: boolean;
}

export const Wrapper = styled.div`
  label {
    cursor: pointer;
  }
`;

export const CheckBox = styled.span<CheckBoxProps>`
  ${({ isChecked, theme }) => css`
    width: 25px;
    height: 25px;
    background: ${isChecked ? `${theme.colors.primaryLightened}` : '#fff'};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid #998220;
  `}
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
`;
