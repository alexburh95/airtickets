import { useAppDispatch, useAppSelector } from '../../hooks';
import { toggleAirlinesFilters } from '../../store/actions';
import getAirlinesFromTickets from '../../utils/getAirlinesFromTickets';
import sourceTickets from '../../flights.json';

function AirlineFilter() {
  const dispatch = useAppDispatch();

  const currentAirlines = useAppSelector((state) => state.choosenAirlines);

  const filterClickHandler = (filter) => {
    dispatch(toggleAirlinesFilters(filter));
  };

  const airlines = getAirlinesFromTickets(sourceTickets.result.flights);

  return (
    <>
      <p className="filter_title">Авиакомпании</p>
      <form action="" className="avia">
        {airlines.map((airline) => (
          <p key={airline}>
            <input
              onChange={() => filterClickHandler(airline)}
              type="checkbox"
              name="avia"
              value={airline}
              checked={currentAirlines.includes(airline)}
            />{' '}
            - {airline}
          </p>
        ))}
        <p></p>
      </form>
    </>
  );
}

export default AirlineFilter;
