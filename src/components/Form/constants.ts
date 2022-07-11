import { formatDateNowToISO, formatTimeNowToISO } from 'utils/datetime';
import * as yup from 'yup';

import type { BarbecueFormFields } from './types';

export const defaultFormValues: BarbecueFormFields = {
  id: undefined,
  partyDate: formatDateNowToISO(),
  partyTime: formatTimeNowToISO(),
  partyDescription: '',
  partyName: '',
  contributionWithDrink: '0',
  contributionWithoutDrink: '0',
  totalContribution: 0,
  totalGuests: 0,
};

export const schema = yup
  .object({
    partyName: yup.string().required('descrição é um campo obrigatório'),
    partyDate: yup.string().required('data do churras é um campo obrigatório'),
    partyTime: yup
      .string()
      .required('horário do churras é um campo obrigatório'),
  })
  .required();
