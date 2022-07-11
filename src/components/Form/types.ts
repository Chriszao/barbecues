export interface BarbecueFormFields {
  id?: number;
  userId?: number;
  partyName: string;
  partyDate: string;
  partyTime: string;
  partyDescription: string;
  contributionWithDrink: string;
  contributionWithoutDrink: string;
  totalGuests: number;
  totalContribution: number;
}

export interface Guest {
  id?: number;
  barbecueId?: number;
  name: string;
  contributionValue: number | string;
  isConfirmed: boolean;
}
