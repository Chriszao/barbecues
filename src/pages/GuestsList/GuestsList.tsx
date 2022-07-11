import { Button } from 'components/Button';
import { Footer } from 'components/Footer';
import { GuestForm } from 'components/Form/GuestForm';
import { SmartForm } from 'components/Form/SmartForm';
import type { BarbecueFormFields, Guest } from 'components/Form/types';
import { GuestItem } from 'components/GuestItem/GuestItem';
import { Header } from 'components/Header';
import { Loader } from 'components/Loader/Loader';
import type { ModalRef } from 'components/Modal';
import { Modal } from 'components/Modal';
import { format } from 'date-fns';
import type { ReactElement } from 'react';
import { useCallback } from 'react';
import { useMemo } from 'react';
import { useRef } from 'react';
import { useIsFetching, useIsMutating } from 'react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import { formatCurrency } from 'utils/currency';

import personsGroup from '../../assets/group.svg';
import iconMoney from '../../assets/icon_money.svg';
import { useGuests } from './hooks/useGuests';
import * as S from './styles';

export function GuestsList(): ReactElement {
  const modalRef = useRef<ModalRef>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const routeData = location.state as BarbecueFormFields;
  const formattedDate = format(new Date(routeData.partyDate), 'dd/MM');
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();

  function handleOpenModal() {
    modalRef.current?.open();
  }

  function handleBackToBarbecuesList() {
    navigate('/barbecue-list');
  }

  const {
    addGuestMutation,
    updateBarbecueMutation,
    guests,
    handleGuestConfirmationChange,
    isLoading,
  } = useGuests({
    barbecueId: routeData.id,
  });

  const sumGuestsContribution = useCallback(() => {
    return guests.reduce((sum, guest) => {
      if (guest.contributionValue && guest.isConfirmed) {
        return sum + (guest.contributionValue as number);
      }
      return sum;
    }, 0);
  }, [guests]);

  const totals = useMemo(() => {
    const totalAmount = formatCurrency(
      sumGuestsContribution()
    ).formatCurrencyToString();
    const totalGuests = guests.filter((guest) => guest.isConfirmed).length;

    return {
      totalAmount,
      totalGuests,
    };
  }, [guests, sumGuestsContribution]);

  function handleSubmit(data: Guest) {
    const totalContribution =
      sumGuestsContribution() +
      formatCurrency(data.contributionValue).convertToFloat();

    void addGuestMutation({
      ...data,
      barbecueId: routeData.id,
      contributionValue: formatCurrency(
        data.contributionValue
      ).convertToFloat(),
    });

    void updateBarbecueMutation({
      barbecueId: routeData.id as number,
      data: {
        ...routeData,
        totalContribution,
        totalGuests: totals.totalGuests + 1,
      },
    });

    modalRef.current?.close();
  }

  return (
    <S.Wrapper>
      <Modal title="Adicionar convidado" ref={modalRef}>
        <SmartForm id="editForm" onSubmit={handleSubmit}>
          <S.FormContainer>
            <GuestForm
              contributionWithDrink={routeData.contributionWithDrink}
              contributionWithoutDrink={routeData.contributionWithoutDrink}
            />

            <Button type="submit" form="editForm">
              Salvar
            </Button>
          </S.FormContainer>
        </SmartForm>
      </Modal>

      <Header />

      <S.Content>
        <S.DateContainer>
          <div style={{ display: 'flex', gap: '8px' }}>
            <S.RoundedButton onClick={handleBackToBarbecuesList}>
              &#60;
            </S.RoundedButton>
            <span className="date">{formattedDate}</span>
          </div>

          <span className="group-persons-section">
            <img src={personsGroup} alt="ícone grupo de pessoas" />
            {totals.totalGuests}
          </span>
        </S.DateContainer>

        <S.PartyNameContainer>
          <h3>{routeData.partyName}</h3>

          <div className="icon-button-container">
            <span className="money-icon">
              <img src={iconMoney} alt="ícone de dinheiro" />
              {totals.totalAmount}
            </span>

            <S.RoundedButton
              className="header-with-button"
              onClick={() => handleOpenModal()}
            >
              +
            </S.RoundedButton>
          </div>
        </S.PartyNameContainer>

        <S.GuestsList isListEmpty={guests.length === 0}>
          {isLoading || !!isFetching || !!isMutating ? (
            <Loader />
          ) : (
            <>
              {guests.length === 0 && (
                <p>Você ainda não convidou ninguém para o churras</p>
              )}

              {guests.map((guest, index) => (
                <GuestItem
                  key={guest.id}
                  index={index}
                  guest={guest}
                  onChangeGuestConfirmation={handleGuestConfirmationChange}
                />
              ))}
            </>
          )}
        </S.GuestsList>
      </S.Content>

      <Footer />
    </S.Wrapper>
  );
}
