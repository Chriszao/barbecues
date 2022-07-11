import * as yup from 'yup';

export const schema = yup
  .object({
    email: yup
      .string()
      .email('email deve ser um email válido')
      .required('email é um campo obrigatório'),
    password: yup
      .string()
      .required('senha é obrigatória')
      .min(6, 'senha deve conter no mínimo 6 caracteres'),
  })
  .required();
