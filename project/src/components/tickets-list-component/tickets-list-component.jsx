
import Ticket from "../ticket-component/ticket-component";

function TicketsList(tickets) {
   
    const array = tickets.tickets
    return (
        array.map((ticket)=>(
            <Ticket
            flight = {ticket.flight}
    
            key = {ticket.flightToken}
            /> ))
    )
}

export default TicketsList;