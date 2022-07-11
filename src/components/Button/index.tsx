import type { ButtonHTMLAttributes, ReactElement, ReactNode } from 'react';

import * as S from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Button({
  children,
  ...buttonProperties
}: ButtonProps): ReactElement {
  return <S.Wrapper {...buttonProperties}>{children}</S.Wrapper>;
}
