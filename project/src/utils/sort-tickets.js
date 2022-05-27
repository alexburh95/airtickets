import { SORTS } from '../consts/sorts';

const sortAscendant = (tickets) =>
  tickets.sort(
    (prev, next) =>
      prev.flight.price.total.amount - next.flight.price.total.amount
  );

const sortDescendant = (tickets) =>
  tickets.sort(
    (prev, next) =>
      next.flight.price.total.amount - prev.flight.price.total.amount
  );

const sortByTime = (tickets) =>
  tickets.sort(
    (prev, next) => prev.flight.legs[0].duration - next.flight.legs[0].duration
  );

const sortTikets = (tickets, sort = SORTS.UP) => {
  switch (sort) {
    case SORTS.UP:
      return sortAscendant(tickets);

    case SORTS.DOWN:
      return sortDescendant(tickets);

    case SORTS.TIME:
      return sortByTime(tickets);

    default:
      return tickets;
  }
};

export default sortTikets;
