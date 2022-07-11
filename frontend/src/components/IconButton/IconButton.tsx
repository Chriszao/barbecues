import type { ButtonHTMLAttributes, ReactElement, ReactNode } from 'react';

import * as S from './styles';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function IconButton({
  children,
  ...rest
}: IconButtonProps): ReactElement {
  return (
    <S.Wrapper type="button" {...rest}>
      {children}
    </S.Wrapper>
  );
}
