import { CheckBox } from 'components/CheckBox/CheckBox';
import type { Guest } from 'components/Form/types';
import type { ReactElement } from 'react';
import { formatCurrency } from 'utils/currency';

import * as S from './styles';

interface GuestItemProps {
  guest: Guest;
  index: number;
  onChangeGuestConfirmation: (index: number) => void;
}

export function GuestItem({
  index,
  guest,
  onChangeGuestConfirmation,
}: GuestItemProps): ReactElement {
  return (
    <S.Wrapper>
      <CheckBox
        name={`guests[${index}].isActive`}
        id={`guests[${index}]-isActive`}
        label={guest.name}
        checked={guest.isConfirmed}
        onChange={() => onChangeGuestConfirmation(index)}
      />

      <div>
        <S.Price confirmed={guest.isConfirmed}>
          {formatCurrency(guest.contributionValue).formatCurrencyToString()}
        </S.Price>
      </div>
    </S.Wrapper>
  );
}
