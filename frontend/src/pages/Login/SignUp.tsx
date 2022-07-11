import { Button } from 'components/Button';
import { SmartForm } from 'components/Form/SmartForm';
import { TextField } from 'components/TextField';
import type { SignInCredentials } from 'hooks/useAuth';
import type { ReactElement } from 'react';
import { toast } from 'react-toastify';
import api from 'services/api';

import type { LoginState } from '.';
import animatedBarbecue from '../../assets/barbecue-animate-signup.svg';
import * as S from './styles';

interface SignUpProps {
  handleLoginChange: (page: LoginState) => void;
}

export function SignUp({ handleLoginChange }: SignUpProps): ReactElement {
  const handleSubmit = async (data: SignInCredentials) => {
    try {
      await api.post('/users', data);
      toast('Cadastro realizado! Você já pode entrar com sua conta.', {
        type: 'success',
      });
      handleLoginChange('signIn');
    } catch (error) {
      toast(
        'Houve um erro interno ao criar sua conta. Revise suas informações.'
      );
    }
  };

  return (
    <S.LoginContainer>
      <S.LeftContainer>
        <h1>
          Crie sua conta
          <br />E participe do nosso churras
        </h1>
        <img src={animatedBarbecue} alt="Churras animado" />
      </S.LeftContainer>

      <S.RightContainer>
        <S.CardLogin>
          <h1>Criar conta</h1>

          <SmartForm<SignInCredentials>
            id="meu-form"
            onSubmit={handleSubmit}
            defaultValues={{ email: '', password: '' }}
            // resolver={yupResolver(schema)}
          >
            <TextField type="text" name="email" placeholder="Email" />
            <TextField type="password" name="password" placeholder="Senha" />
          </SmartForm>
          <S.SignUpButton onClick={() => handleLoginChange('signIn')}>
            Entre com sua conta
          </S.SignUpButton>

          <Button type="submit" form="meu-form">
            Inscrever-se
          </Button>
        </S.CardLogin>
      </S.RightContainer>
    </S.LoginContainer>
  );
}
