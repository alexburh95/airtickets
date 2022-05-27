import { formatDate, formatTime, getTimeFromMins } from '../../utils/dates';
import TransfeLine from '../transfer-line-component/transfer-line-component';

function Fly(fly) {
  const fisrtFly = fly.fly;
  const fisrtFlyDetailsFrom = fisrtFly.segments[0];
  const firstFlyDetailsTo = fisrtFly.segments[1];
  const arrivalDate = formatDate(fisrtFlyDetailsFrom.departureDate);
  const arrivalTime = formatTime(fisrtFlyDetailsFrom.departureDate);
  const flyTime = fisrtFly.duration;
  return (
    <div className="ticket_main first_fly">
      <div className="departure_cityes">
        <h2 className="city_title">
      
          {fisrtFlyDetailsFrom.departureCity === undefined ? ' ': fisrtFlyDetailsFrom.departureCity.caption},{' '}
          {fisrtFlyDetailsFrom.departureAirport.caption}{' '}
          <span> ({fisrtFlyDetailsFrom.departureAirport.uid})</span>
        </h2>
        <span className="arrow">&#8594;</span>
        <>
          {' '}
          <h2 className="city_title">
            {fisrtFly.segments.length > 1 ? (
              <>

         
                {firstFlyDetailsTo.arrivalCity === undefined ? 'Ошибка': firstFlyDetailsTo.arrivalCity.caption   },{' '}
                {firstFlyDetailsTo.arrivalAirport.caption }{' '}
                <span> ({firstFlyDetailsTo.arrivalAirport.uid  })</span>{' '}
              </>
            ) : (
              <>
                {' '}
                {fisrtFlyDetailsFrom.arrivalCity.caption  },{' '}
                {fisrtFlyDetailsFrom.arrivalAirport.caption }{' '}
                <span> ( {fisrtFlyDetailsFrom.arrivalAirport.uid })</span>{' '}
              </>
            )}
          </h2>{' '}
        </>
      </div>
      <div className="grey_line"></div>

      <div className="arrive_times">
        <h3 className="arrive_time">
          {arrivalTime}
          <span>{arrivalDate}</span>
        </h3>
        <h3 className="arrive_time">&#8986;{getTimeFromMins(flyTime)}</h3>
        <>
          {' '}
          <h3 className="arrive_time">
            {fisrtFly.segments.length > 1 ? (
              <>
                <span>{formatDate(firstFlyDetailsTo.arrivalDate)}</span>{' '}
                {formatTime(firstFlyDetailsTo.arrivalDate)}{' '}
              </>
            ) : (
              <>
                <span>{formatDate(fisrtFlyDetailsFrom.arrivalDate)} </span>{' '}
                {formatTime(fisrtFlyDetailsFrom.arrivalDate)}
              </>
            )}
          </h3>
        </>
      </div>
      <div className="transfer">
        {fisrtFly.segments.length > 1 ? <TransfeLine /> : null}
      </div>

      <div className="airline">
        <p className="airline_title">
          Рейс выполняет: {fisrtFlyDetailsFrom.airline.uid}{' '}
          {fisrtFlyDetailsFrom.airline.caption}{' '}
        </p>
      </div>
    </div>
  );
}

export default Fly;
