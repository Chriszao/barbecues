import type { InputHTMLAttributes, ReactElement } from 'react';

import * as S from './styles';

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
}

export function CheckBox({
  label,
  name,
  checked,
  ...inputProps
}: CheckBoxProps): ReactElement {
  return (
    <S.Wrapper>
      <input
        {...inputProps}
        id={name}
        name={name}
        type="checkbox"
        checked={checked}
        hidden
      />

      <S.Label htmlFor={name}>
        <S.CheckBox isChecked={checked as boolean} />
        {label}
      </S.Label>
    </S.Wrapper>
  );
}
