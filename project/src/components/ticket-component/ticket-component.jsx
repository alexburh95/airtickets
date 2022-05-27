
import Fly from "../fly-component/fly-component";

function Ticket(flight) {
const segments =flight.flight.legs;
const fisrtFly = segments[0];
const secondFly = segments[1];

    return (
<div className="ticket">
      <div className="ticket_header">

       <h3 className="aier_uid">{flight.flight.carrier.uid}</h3>
        <div><p className="header_price">{flight.flight.price.total.amount} &#8381;</p>
        <p className="price_description">Стоимость для одного взрослого пассажира</p></div>

      </div>

  
    <Fly fly = {fisrtFly} />
    <div className="blue_line">
          </div>
          <Fly fly = {secondFly} />
   <button className="choose">ВЫБРАТЬ</button>
     
    </div>

    );
}
export default Ticket;