import type { ButtonHTMLAttributes, ReactElement } from 'react';

import * as S from './styles';

type FloatingIconProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function FloatingIcon({
  ...properties
}: FloatingIconProps): ReactElement {
  return (
    <S.Wrapper {...properties}>
      <span>+</span>
    </S.Wrapper>
  );
}
