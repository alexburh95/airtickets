const getAirlinesFromTickets = (tickets) => {
  return [...new Set(tickets.map((ticket) => ticket.flight.carrier.caption))];
};

export default getAirlinesFromTickets;
