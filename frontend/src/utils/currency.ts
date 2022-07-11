interface FormatCurrency {
  convertToFloat: () => number;
  formatCurrencyToString: () => string;
}

export function formatCurrency(value: string | number): FormatCurrency {
  const convertToFloat = (): number =>
    parseFloat((value as string).replace(',', '.'));

  const formatCurrencyToString = () =>
    (value as number).toLocaleString('pt-BR', {
      currency: 'BRL',
      style: 'currency',
    });

  return {
    convertToFloat,
    formatCurrencyToString,
  };
}
