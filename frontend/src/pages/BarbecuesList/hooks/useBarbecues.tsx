import type { BarbecueFormFields } from 'components/Form/types';
import { useAuth } from 'hooks/useAuth';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import api from 'services/api';

import type { EditBarbecue, UseBarbecues } from '../types';

export function useBarbecues(): UseBarbecues {
  const queryClient = useQueryClient();
  const { user } = useAuth();

  const fetchBarbecuesQuery = async () => {
    const response = await api.get<BarbecueFormFields[]>(
      `/barbecues?userId=${user.id}`
    );

    return response.data;
  };

  const addBarbecueMutation = async (data: BarbecueFormFields) => {
    const response = await api.post<BarbecueFormFields>('/barbecues', {
      ...data,
      userId: user.id,
    });

    return response.data;
  };

  const editBarbecueMutation = async ({ barbecueId, data }: EditBarbecue) => {
    const response = await api.put<BarbecueFormFields>(
      `/barbecues/${barbecueId}`,
      data
    );

    return response.data;
  };

  const deleteBarbecueMutation = async (barbecueId: number) => {
    const response = await api.delete<unknown>(`/barbecues/${barbecueId}`);

    return response.data;
  };

  const { data: barbecues, isLoading: isFetchLoading } = useQuery(
    ['barbecues', user.id],
    fetchBarbecuesQuery
  );

  const { mutateAsync: addBarbecue, isLoading: isAddLoading } = useMutation(
    addBarbecueMutation,
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['barbecues']);
        toast('Churras adicionado com sucesso!', {
          type: 'success',
        });
      },
    }
  );

  const { mutateAsync: editBarbecue, isLoading: isEditLoading } = useMutation(
    editBarbecueMutation,
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['barbecues']);
        toast('Churras atualizado com sucesso!', {
          type: 'success',
        });
      },
    }
  );

  const { mutateAsync: deleteBarbecue, isLoading: isDeleteLoading } =
    useMutation(deleteBarbecueMutation, {
      onSuccess: () => {
        queryClient.invalidateQueries(['barbecues']);
        toast('Churras Deletado com sucesso!', {
          type: 'success',
        });
      },
    });

  return {
    barbecues,
    addBarbecue,
    editBarbecue,
    deleteBarbecue,
    isLoading:
      isFetchLoading || isAddLoading || isDeleteLoading || isEditLoading,
  };
}
