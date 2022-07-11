import { formatISO } from 'date-fns';

export function formatTimeNowToISO(): string {
  const time = formatISO(new Date(), {
    representation: 'time',
  });

  const [hour, minute] = time.split(':');

  return `${hour}:${minute}`;
}

export function formatDateNowToISO(): string {
  const date = formatISO(new Date(), {
    representation: 'date',
  });

  return date;
}
