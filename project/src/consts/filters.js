const FILTERS = {
  NO_TRANSFERS: 'NO_TRANSFERS',
  ONE_TRANSFER: 'ONE_TRANSFER',
};

const filters = [
  {
    text: 'без пересадок',
    value: FILTERS.NO_TRANSFERS,
  },
  {
    text: '1 пересадка',
    value: FILTERS.ONE_TRANSFER,
  },
];

const NO_TRANSFERS_AMOUNT = 2;

export { FILTERS, NO_TRANSFERS_AMOUNT };
export default filters;
