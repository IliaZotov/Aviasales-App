import React from 'react';
import './Tickets-List.css';
import TicketCard from '../Ticket-Card/Ticket-Card';

const TicketsList = () => {
  return (
      <ul className='card-list'>
        <li className='card'>
          <TicketCard />
        </li>
        <li className='card'>
          <TicketCard />
        </li>
        <li className='card'>
          <TicketCard />
        </li>
        <li className='card'>
          <TicketCard />
        </li>
        <li className='card'>
          <TicketCard />
        </li>
      </ul>
  );
};

export default TicketsList;
