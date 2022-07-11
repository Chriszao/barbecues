import type { BarbecueFormFields } from 'components/Form/types';
import type { UseMutateAsyncFunction } from 'react-query';

type MutationProps<F, V> = UseMutateAsyncFunction<F, unknown, V>;

export interface EditBarbecue {
  barbecueId: number;
  data: BarbecueFormFields;
}

export interface UseBarbecues {
  barbecues?: BarbecueFormFields[];
  addBarbecue: MutationProps<BarbecueFormFields, BarbecueFormFields>;
  editBarbecue: MutationProps<BarbecueFormFields, EditBarbecue>;
  deleteBarbecue: MutationProps<unknown, number>;
  isLoading: boolean;
}

export interface ContainerProps {
  isListEmpty: boolean;
}

export interface ModalInfo {
  formDefaultValues: BarbecueFormFields;
  title: string;
  operation: 'new' | 'edit';
}
