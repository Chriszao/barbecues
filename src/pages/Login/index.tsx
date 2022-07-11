import { Logo } from 'components/Logo';
import type { ReactElement } from 'react';
import { useState } from 'react';

import { SignIn } from './SignIn';
import { SignUp } from './SignUp';
import * as S from './styles';

export type LoginState = 'signIn' | 'signUp';

export function Login(): ReactElement {
  const [loginPage, setLoginPage] = useState<LoginState>('signIn');

  function handleLoginChange(page: LoginState) {
    setLoginPage(page);
  }
  return (
    <S.Wrapper>
      {loginPage === 'signIn' ? (
        <SignIn handleLoginChange={handleLoginChange} />
      ) : (
        <SignUp handleLoginChange={handleLoginChange} />
      )}

      <S.LoginFooter>
        <Logo />
      </S.LoginFooter>
    </S.Wrapper>
  );
}
