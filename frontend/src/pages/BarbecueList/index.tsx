import { Header } from 'components/Header';
import type { ReactElement } from 'react';

import * as S from './styles';

export function BarbecueList(): ReactElement {
  return (
    <S.Wrapper>
      <Header />
      <p>Oi mundo</p>
    </S.Wrapper>
  );
}
