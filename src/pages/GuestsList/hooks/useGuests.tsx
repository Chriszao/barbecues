import type { BarbecueFormFields, Guest } from 'components/Form/types';
import { useAuth } from 'hooks/useAuth';
import { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import api from 'services/api';

import type {
  AddGuest,
  UpdateBarbecue,
  UseGuests,
  UseGuestsProps,
} from '../types';

export function useGuests({ barbecueId }: UseGuestsProps): UseGuests {
  const [guests, setGuests] = useState<Guest[]>([]);
  const { user } = useAuth();
  const queryClient = useQueryClient();

  function handleGuestConfirmationChange(index: number) {
    setGuests((prev) =>
      prev.map((guest, guestIndex) =>
        index === guestIndex
          ? { ...guest, isConfirmed: !guest.isConfirmed }
          : guest
      )
    );
  }

  const addGuest = async (data: AddGuest) => {
    const response = await api.post<Guest>('/guests', {
      ...data,
      isConfirmed: true,
    });

    return response.data;
  };

  const updateBarbecue = async ({ data, barbecueId }: UpdateBarbecue) => {
    const response = await api.put<BarbecueFormFields>(
      `/barbecues/${barbecueId}`,
      data
    );

    return response.data;
  };

  const { mutateAsync: addGuestMutation, isLoading: isGuestMutationLoading } =
    useMutation(addGuest, {
      onSuccess: (data: Guest) => {
        queryClient.invalidateQueries(['barbecues', user.id]);
        queryClient.invalidateQueries(['guests', barbecueId]);
        setGuests((prev) => [...prev, data]);
        toast('Convidado adicionado com sucesso!', {
          type: 'success',
        });
      },
    });

  const {
    mutateAsync: updateBarbecueMutation,
    isLoading: isBarbecueUpdateLoading,
  } = useMutation(updateBarbecue);

  const fetchGuestsQuery = async (barbecueId: number) => {
    const response = await api.get<Guest[]>(`/guests?barbecueId=${barbecueId}`);

    return response.data;
  };

  const { data: fetchedGuests, isLoading: isQueryLoading } = useQuery(
    ['guests', barbecueId],
    () => fetchGuestsQuery(barbecueId as number)
  );

  useEffect(() => {
    if (fetchedGuests) {
      setGuests(fetchedGuests);
    }
  }, [fetchedGuests]);

  return {
    addGuestMutation,
    updateBarbecueMutation,
    guests,
    handleGuestConfirmationChange,
    isLoading:
      isGuestMutationLoading || isQueryLoading || isBarbecueUpdateLoading,
  };
}
