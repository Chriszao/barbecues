import { Logout } from '@styled-icons/material/Logout';
import { useAuth } from 'hooks/useAuth';
import type { ReactElement } from 'react';
import { useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

import * as S from './styles';

export function Header(): ReactElement {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  function handleLogOut() {
    signOut();
    navigate('/');
    queryClient.removeQueries();
  }

  return (
    <S.Wrapper>
      <S.LogOutButtonContainer onClick={handleLogOut}>
        <Logout size={24} />
      </S.LogOutButtonContainer>

      <h1>Churras da trinca</h1>
      <S.BottomFade />
    </S.Wrapper>
  );
}
