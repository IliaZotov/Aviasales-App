import React from 'react';
import { addMinutes, format } from 'date-fns';
import './Ticket-Card.scss';

const TicketCard = ({ price, carrier, segments }) => {
  const getStopsString = (stops) => {
    if (stops.length === 0) return 'Прямой рейс';
    if (stops.length === 1) return '1 пересадка';
    return `${stops.length} пересадки`;
  };

  return (
    <div className='ticket-card'>
      <div className='card-header'>
        <h2 className='card-header__price'>{price} Р</h2>
        <div className='card-header__logo'>
          <img src={`https://pics.avs.io/90/50/${carrier}.png`} alt='logo' />
        </div>
      </div>
      <div className='ticket-card__content'>
        <div className='ticket-card__city-time'>
          <p className='ticket-card__title'>
            {segments[0].origin} - {segments[0].destination}
          </p>
          <p className='ticket-card__value'>{`${format(
            new Date(segments[0].date),
            'HH:mm',
          )} - ${format(
            addMinutes(new Date(segments[0].date), segments[0].duration),
            'HH:mm',
          )}`}</p>

          <p className='ticket-card__title'>
            {segments[1].origin} - {segments[1].destination}
          </p>
          <p className='ticket-card__value'>{`${format(
            new Date(segments[1].date),
            'HH:mm',
          )} - ${format(
            addMinutes(new Date(segments[1].date), segments[1].duration),
            'HH:mm',
          )}`}</p>
        </div>
        <div className='ticket-card__travel-time'>
          <p className='ticket-card__title'>В пути</p>
          <p className='ticket-card__value'>{`${Math.floor(
            segments[0].duration / 60,
          )}ч ${segments[0].duration % 60}м`}</p>

          <p className='ticket-card__title'>В пути</p>
          <p className='ticket-card__value'>{`${Math.floor(
            segments[1].duration / 60,
          )}ч ${segments[1].duration % 60}м`}</p>
        </div>
        <div className='ticket-card__transfers'>
          <p className='ticket-card__title'>
            {getStopsString(segments[0].stops)}
          </p>
          <p className='ticket-card__value'>
            {segments[0].stops.length > 0
              ? segments[0].stops.join(', ')
              : 'Без пересадок'}
          </p>

          <p className='ticket-card__title'>
            {getStopsString(segments[1].stops)}
          </p>
          <p className='ticket-card__value'>
            {segments[1].stops.length > 0
              ? segments[1].stops.join(', ')
              : 'Без пересадок'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
