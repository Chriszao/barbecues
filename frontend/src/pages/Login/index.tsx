import { Button } from 'components/Button';
import { FormGroup } from 'components/FormGroup';
import { Logo } from 'components/Logo';
import { TextField } from 'components/TextField';
import type { ReactElement } from 'react';

import animatedBarbecue from '../../assets/barbecue-animate.svg';
import * as S from './styles';

export function Login(): ReactElement {
  function onSubmit(data: unknown) {
    console.log(data);
  }
  return (
    <S.Wrapper>
      <S.LoginContainer>
        <S.LeftContainer>
          <h1>
            Faça login
            <br />E participe do nosso churras
          </h1>
          <img src={animatedBarbecue} alt="Churras animado" />
        </S.LeftContainer>

        <S.RightContainer>
          <S.CardLogin>
            <h1>Login</h1>
            <FormGroup id="meu-form" onSubmit={onSubmit}>
              <TextField type="text" name="username" placeholder="Usuário" />
              <TextField type="password" name="password" placeholder="Senha" />
            </FormGroup>
            <Button>Entrar</Button>
          </S.CardLogin>
        </S.RightContainer>
      </S.LoginContainer>
      <S.LoginFooter>
        <Logo />
      </S.LoginFooter>
    </S.Wrapper>
  );
}
