export const getTransfersCount = (ticket) =>
  ticket.flight.legs[0].segments.length + ticket.flight.legs[1].segments.length;
