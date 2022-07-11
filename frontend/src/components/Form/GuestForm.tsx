import { TextField } from 'components/TextField';
import type { ReactElement } from 'react';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

import * as S from './styles';

interface GuestFormProps {
  contributionWithDrink: string;
  contributionWithoutDrink: string;
}

type SelectedContributionValue = 'withDrink' | 'withoutDrink';

export function GuestForm({
  contributionWithDrink,
  contributionWithoutDrink,
}: GuestFormProps): ReactElement {
  const { setValue } = useFormContext();
  const [selectedContribution, setSelectedContribution] =
    useState<SelectedContributionValue>();

  function handleContributionButtonClick(
    buttonClicked: SelectedContributionValue,
    fieldValue: string
  ) {
    setValue('contributionValue', fieldValue);
    setSelectedContribution((prev) =>
      prev === buttonClicked ? undefined : buttonClicked
    );
  }

  return (
    <>
      <TextField label="Nome" name="name" />

      <S.ContributionValueContainer>
        <span>Valor sugerido para contribuição</span>

        <S.ButtonsContainer>
          <S.ContributionButton
            isSelected={selectedContribution === 'withDrink'}
            type="button"
            onClick={() =>
              handleContributionButtonClick('withDrink', contributionWithDrink)
            }
          >
            <p>Com bebida</p>
            <span>R$ {contributionWithDrink}</span>
          </S.ContributionButton>

          <S.ContributionButton
            isSelected={selectedContribution === 'withoutDrink'}
            type="button"
            onClick={() =>
              handleContributionButtonClick(
                'withoutDrink',
                contributionWithoutDrink
              )
            }
          >
            <p>Sem bebida</p>
            <span>R$ {contributionWithoutDrink}</span>
          </S.ContributionButton>
        </S.ButtonsContainer>
      </S.ContributionValueContainer>

      <TextField
        label="Valor de contribuição"
        name="contributionValue"
        maskType="money"
      />
    </>
  );
}
