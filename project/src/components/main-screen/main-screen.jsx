import Filters from '../filters-component/filters-component';
import ShowMoreButton from '../show-more/show-more';
import TicketsList from '../tickets-list-component/tickets-list-component';

import { useAppSelector } from '../../hooks';
import { filterTickets, sortTickets } from '../../utils/';

import sourceTickets from '../../flights.json';

function MainScreen() {
  const maxTicketsonPage = useAppSelector((state) => state.maxTickets);
  const currenSort = useAppSelector((state) => state.choosenSort);
  const transfers = useAppSelector((state) => state.choosenTransferOptions);
  const maxPrice = useAppSelector((state) => state.maxPrice);
  const minPrice = useAppSelector((state) => state.minPrice);
  const airlines = useAppSelector((state) => state.choosenAirlines);

  const options = {
    transfers,
    airlines,
    maxPrice,
    minPrice,
  };

  const filteredTickets = filterTickets(sourceTickets.result.flights, options);

  const tickets = sortTickets(filteredTickets, currenSort);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <Filters />
        </div>
        <div className="col-lg-8">
          {tickets ? (
            <>
              <TicketsList
                tickets={tickets.slice(
                  0 /* change to `page` later */,
                  maxTicketsonPage
                )}
              />
              {tickets.length > maxTicketsonPage ? <ShowMoreButton /> : null}
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
export default MainScreen;
