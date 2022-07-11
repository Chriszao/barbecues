import { Delete, Edit } from '@styled-icons/material';
import type { BarbecueFormFields } from 'components/Form/types';
import { IconButton } from 'components/IconButton/IconButton';
import { format } from 'date-fns';
import { useBarbecues } from 'pages/BarbecuesList/hooks/useBarbecues';
import type { ReactElement } from 'react';
import { formatCurrency } from 'utils/currency';

import personsGroup from '../../assets/group.svg';
import iconMoney from '../../assets/icon_money.svg';
import * as S from './styles';

interface CardInfoProps {
  onClick: () => void;
  onEditBarbecue: (barbecue: BarbecueFormFields) => void;
  barbecue: BarbecueFormFields;
}

export function CardInfo({
  onClick,
  barbecue,
  onEditBarbecue,
}: CardInfoProps): ReactElement {
  const formattedDate = format(new Date(barbecue.partyDate), 'dd/MM');
  const { deleteBarbecue } = useBarbecues();

  function handleBarbecueDelete() {
    deleteBarbecue(barbecue.id as number);
  }

  return (
    <S.Wrapper onClick={onClick}>
      <S.CardHeader>
        <div className="action-buttons-container">
          <span>{formattedDate}</span>

          <div className="action-buttons">
            <IconButton
              onClick={(event) => {
                event.stopPropagation();
                onEditBarbecue(barbecue);
              }}
            >
              <Edit size={24} className="icon" />
            </IconButton>

            <IconButton
              onClick={(event) => {
                event.stopPropagation();
                handleBarbecueDelete();
              }}
            >
              <Delete size={24} className="icon" />
            </IconButton>
          </div>
        </div>

        <p>{barbecue.partyName}</p>
      </S.CardHeader>

      <S.CardFooter>
        <span className="group-persons-section">
          <img src={personsGroup} alt="ícone grupo de pessoas" />{' '}
          {barbecue.totalGuests}
        </span>

        <span className="money-section">
          <img src={iconMoney} alt="ícone de dinheiro" />
          {formatCurrency(barbecue.totalContribution).formatCurrencyToString()}
        </span>
      </S.CardFooter>
    </S.Wrapper>
  );
}
