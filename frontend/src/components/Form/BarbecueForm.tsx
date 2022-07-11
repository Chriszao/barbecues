import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'components/Button';
import { TextField } from 'components/TextField';
import { useBarbecues } from 'pages/BarbecuesList/hooks/useBarbecues';
import type { ModalInfo } from 'pages/BarbecuesList/types';
import type { ReactElement } from 'react';

import { schema } from './constants';
import { SmartForm } from './SmartForm';
import * as S from './styles';
import type { BarbecueFormFields } from './types';

interface BarbecueFormProps {
  modalInfo: ModalInfo;
  onCloseModal: () => void;
}

export function BarbecueForm({
  modalInfo,
  onCloseModal,
}: BarbecueFormProps): ReactElement {
  const { addBarbecue, editBarbecue } = useBarbecues();

  function onSubmit(data: BarbecueFormFields) {
    if (modalInfo.operation === 'new') {
      onCloseModal();
      void addBarbecue({
        ...data,
        totalContribution: 0,
        totalGuests: 0,
      });
      return;
    }
    onCloseModal();
    void editBarbecue({
      data,
      barbecueId: modalInfo.formDefaultValues.id as number,
    });
  }

  return (
    <SmartForm<BarbecueFormFields>
      id="addBarbecue"
      onSubmit={onSubmit}
      defaultValues={modalInfo.formDefaultValues}
      resolver={yupResolver(schema)}
    >
      <S.FormContent>
        <TextField name="partyName" label="Descrição" autoFocus />
        <div className="fields-group">
          <TextField
            type="date"
            name="partyDate"
            label="Data do churras"
            fullWidth
          />
          <TextField
            type="time"
            name="partyTime"
            label="Horário do churras"
            fullWidth
          />
        </div>
        <div className="fields-group">
          <TextField
            name="contributionWithoutDrink"
            label="Contribuição sem bebida"
            fullWidth
            maskType="money"
          />
          <TextField
            name="contributionWithDrink"
            label="Contribuição com bebida"
            fullWidth
            maskType="money"
          />
        </div>
        <TextField
          useTextArea
          name="partyDescription"
          label="Observações adicionais"
          maxLength={1000}
        />
        <Button type="submit">Salvar</Button>
      </S.FormContent>
    </SmartForm>
  );
}
