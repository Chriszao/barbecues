import type { BarbecueFormFields, Guest } from 'components/Form/types';
import type { UseMutateAsyncFunction } from 'react-query';

export interface GuestsListProps {
  isListEmpty: boolean;
}

type MutationProps<F, V> = UseMutateAsyncFunction<F, unknown, V, unknown>;

export interface UpdateBarbecue {
  data: BarbecueFormFields;
  barbecueId: number;
}

export interface UseGuestsProps {
  barbecueId?: number;
}

export interface UseGuests {
  addGuestMutation: MutationProps<Guest, AddGuest>;
  updateBarbecueMutation: MutationProps<BarbecueFormFields, UpdateBarbecue>;
  guests: Guest[];
  handleGuestConfirmationChange: (index: number) => void;
  isLoading: boolean;
}

export type AddGuest = {
  barbecueId?: number;
  name: string;
  contributionValue: number | string;
  isConfirmed?: boolean;
};
