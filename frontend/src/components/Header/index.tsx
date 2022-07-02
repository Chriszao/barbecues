import type { ReactElement } from 'react';

import * as S from './styles';

export function Header(): ReactElement {
  return (
    <S.Wrapper>
      <h1>Churras da trinca</h1>
      <S.BottomFade />
    </S.Wrapper>
  );
}
