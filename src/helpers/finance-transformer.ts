const enum currencyEnum {
  EUR = '\u20AC',
  USD = '\u0024',
}

export const financeTransformer = (sum: number, currency = 'EUR'): string => {
  const sumWithComa = sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  switch (currency) {
    case 'EUR':
      return `${currencyEnum.EUR} ${sumWithComa}`;

    case 'USD':
      return `${currencyEnum.USD} ${sumWithComa}`;

    default:
      return sumWithComa;
  }
};
