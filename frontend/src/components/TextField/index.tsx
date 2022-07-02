import type { InputHTMLAttributes, ReactElement } from 'react';
import { useController, useFormContext } from 'react-hook-form';

import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  rules?: unknown;
  name: string;
}

export function TextField({
  name,
  placeholder,
  required,
  ...inputProperties
}: InputProps): ReactElement {
  const { control } = useFormContext();

  const baseRules = {
    required: { message: 'Campo obrigatório', value: !!required },
  };

  const { field, fieldState } = useController({
    name,
    control,
    rules: { ...baseRules },
  });

  return (
    <S.Wrapper>
      <input
        {...field}
        {...inputProperties}
        name={name}
        placeholder={placeholder}
      />
    </S.Wrapper>
  );
}
