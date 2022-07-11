import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'components/Button';
import { SmartForm } from 'components/Form/SmartForm';
import { TextField } from 'components/TextField';
import type { SignInCredentials } from 'hooks/useAuth';
import { useAuth } from 'hooks/useAuth';
import type { ReactElement } from 'react';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import type { LoginState } from '.';
import animatedBarbecue from '../../assets/barbecue-animate-signin.svg';
import { schema } from './constants';
import * as S from './styles';

interface SignInProps {
  handleLoginChange: (page: LoginState) => void;
}

export function SignIn({ handleLoginChange }: SignInProps): ReactElement {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    async (data: SignInCredentials) => {
      try {
        await signIn({
          email: data.email,
          password: data.password,
        });

        navigate('/barbecue-list');
      } catch (error) {
        toast('Ocorreu um erro ao fazer login, cheque as credenciais.', {
          type: 'error',
        });
      }
    },
    [navigate, signIn]
  );

  return (
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

          <SmartForm<SignInCredentials>
            id="meu-form"
            onSubmit={handleSubmit}
            defaultValues={{ email: '', password: '' }}
            resolver={yupResolver(schema)}
          >
            <TextField type="text" name="email" placeholder="Email" />
            <TextField type="password" name="password" placeholder="Senha" />
          </SmartForm>
          <S.SignUpButton onClick={() => handleLoginChange('signUp')}>
            Criar conta
          </S.SignUpButton>

          <Button type="submit" form="meu-form">
            Entrar
          </Button>
        </S.CardLogin>
      </S.RightContainer>
    </S.LoginContainer>
  );
}
