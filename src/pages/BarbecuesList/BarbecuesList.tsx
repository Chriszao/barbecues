import { CardInfo } from 'components/CardInfo';
import { FloatingIcon } from 'components/FloatingIcon';
import { Footer } from 'components/Footer';
import { BarbecueForm } from 'components/Form/BarbecueForm';
import { defaultFormValues } from 'components/Form/constants';
import type { BarbecueFormFields } from 'components/Form/types';
import { Header } from 'components/Header';
import { Loader } from 'components/Loader/Loader';
import type { ModalRef } from 'components/Modal';
import { Modal } from 'components/Modal';
import type { ReactElement } from 'react';
import { useRef, useState } from 'react';
import { useIsFetching, useIsMutating } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { useBarbecues } from './hooks/useBarbecues';
import * as S from './styles';
import type { ModalInfo } from './types';

export function BarbecuesList(): ReactElement {
  const modalRef = useRef<ModalRef>(null);
  const navigate = useNavigate();
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();

  const { barbecues, isLoading } = useBarbecues();

  const [modalInfo, setModalInfo] = useState<ModalInfo>({
    formDefaultValues: defaultFormValues,
    title: '',
    operation: 'new',
  });

  function addBarbecue() {
    setModalInfo({
      formDefaultValues: defaultFormValues,
      title: 'Criar um churras',
      operation: 'new',
    });

    modalRef.current?.open();
  }

  function handleEditBarbecue(barbecue: BarbecueFormFields) {
    setModalInfo({
      formDefaultValues: barbecue,
      title: 'Editar um churras',
      operation: 'edit',
    });

    modalRef.current?.open();
  }

  function addGuests(barbecue: BarbecueFormFields) {
    navigate('/guests-list', { state: barbecue });
  }

  return (
    <S.Wrapper>
      <Modal ref={modalRef} title={modalInfo.title}>
        <BarbecueForm
          modalInfo={modalInfo}
          onCloseModal={() => modalRef.current?.close()}
        />
      </Modal>

      <Header />

      <S.Container
        isListEmpty={barbecues?.length === 0 && (!isFetching || !isMutating)}
      >
        {isFetching || isMutating || isLoading ? (
          <Loader />
        ) : (
          <>
            {barbecues?.length === 0 ? (
              <p>Você não tem nenhum churras marcado.</p>
            ) : (
              <S.CardList>
                {barbecues?.map((barbecue) => (
                  <CardInfo
                    key={barbecue.id}
                    onClick={() => addGuests(barbecue)}
                    onEditBarbecue={handleEditBarbecue}
                    barbecue={barbecue}
                  />
                ))}
              </S.CardList>
            )}

            <FloatingIcon onClick={addBarbecue} />
          </>
        )}
      </S.Container>

      <Footer />
    </S.Wrapper>
  );
}
