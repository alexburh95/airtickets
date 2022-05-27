import { FILTERS, NO_TRANSFERS_AMOUNT } from '../consts/filters';

const transfersAmounts = {
  [FILTERS.NO_TRANSFERS]: 0,
  [FILTERS.ONE_TRANSFER]: 1,
};

const filterWithTransfer = (ticket, transfers) => {
  return (
    ticket.flight.legs[0].segments.length +
      ticket.flight.legs[1].segments.length ===
    NO_TRANSFERS_AMOUNT + transfers
  );
};

const filterByAirline = (ticket, filters) => {
  return filters.includes(ticket.flight.carrier.caption);
};

const filterByPrice = (ticket, maxPrice, minPrice) => {
  return (
    ticket.flight.price.total.amount >= minPrice &&
    ticket.flight.price.total.amount <= maxPrice
  );
};

const filterTickets = (tickets, options) => {
  let filteredTickets = tickets;

  if (options.transfers.length !== 0) {
    const filteredTicketsWithNoTransfer = options.transfers.includes(
      FILTERS.NO_TRANSFERS
    )
      ? tickets.filter((ticket) =>
          filterWithTransfer(ticket, transfersAmounts[FILTERS.NO_TRANSFERS])
        )
      : [];

    const filteredTicketsWithOneTransfer = options.transfers.includes(
      FILTERS.ONE_TRANSFER
    )
      ? tickets.filter((ticket) =>
          filterWithTransfer(ticket, transfersAmounts[FILTERS.ONE_TRANSFER])
        )
      : [];

    filteredTickets = [
      ...filteredTicketsWithNoTransfer,
      ...filteredTicketsWithOneTransfer,
    ];
 
  }

  if (options.airlines.length !== 0) {
    const filteredTicketsByAirlines = filteredTickets.filter((ticket) =>
      filterByAirline(ticket, options.airlines)
    );

    filteredTickets = filteredTicketsByAirlines;
    
  }

  const filteredTicketByPrice = filteredTickets.filter((ticket) =>
    filterByPrice(ticket, options.maxPrice, options.minPrice)
  );

  filteredTickets = filteredTicketByPrice;

  return filteredTickets;
};

export default filterTickets;
