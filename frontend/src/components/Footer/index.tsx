import { Logo } from 'components/Logo';
import type { ReactElement } from 'react';

import * as S from './styles';

export function Footer(): ReactElement {
  return (
    <S.Wrapper>
      <Logo />
    </S.Wrapper>
  );
}
