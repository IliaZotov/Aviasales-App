import React from 'react';
import { addMinutes, format } from 'date-fns';
import './Ticket-Card.css'; // Импортируем файл стилей для карточки
import logo from '../../assets/img/S7 Logo.svg'; // Путь к логотипу авиакомпании

const TicketCard = () => {
  // Генерируем рандомные данные для карточки
  const price = Math.floor(Math.random() * 1000) + 100;
  const origin = 'MOW';
  const destination = 'LON';
  const flights = [
    { date: new Date(), duration: Math.floor(Math.random() * 600) + 60, stops: ['IST', 'DXB'] },
    { date: new Date(), duration: Math.floor(Math.random() * 600) + 60, stops: [] }
  ];

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
          <img src={logo} alt='S7 Airlines Logo' />
        </div>
      </div>
      <div className='ticket-card__content'>
        <div className='ticket-card__city-time'>
          <p className='ticket-card__title'>
            {origin} - {destination}
          </p>
          <p className='ticket-card__value'>{`${format(
            new Date(flights[0].date),
            'HH:mm'
          )} - ${format(
            addMinutes(new Date(flights[0].date), flights[0].duration),
            'HH:mm'
          )}`}</p>

          <p className='ticket-card__title'>
            {destination} - {origin}
          </p>
          <p className='ticket-card__value'>{`${format(
            new Date(flights[1].date),
            'HH:mm'
          )} - ${format(
            addMinutes(new Date(flights[1].date), flights[1].duration),
            'HH:mm'
          )}`}</p>
        </div>
        <div className='ticket-card__travel-time'>
          <p className='ticket-card__title'>В пути</p>
          <p className='ticket-card__value'>{`${Math.floor(
            flights[0].duration / 60
          )}ч ${flights[0].duration % 60}м`}</p>

          <p className='ticket-card__title'>В пути</p>
          <p className='ticket-card__value'>{`${Math.floor(
            flights[1].duration / 60
          )}ч ${flights[1].duration % 60}м`}</p>
        </div>
        <div className='ticket-card__transfers'>
          <p className='ticket-card__title'>
            {getStopsString(flights[0].stops)}
          </p>
          <p className='ticket-card__value'>
            {flights[0].stops.length > 0
              ? flights[0].stops.join(', ')
              : 'Без пересадок'}
          </p>

          <p className='ticket-card__title'>
            {getStopsString(flights[1].stops)}
          </p>
          <p className='ticket-card__value'>
            {flights[1].stops.length > 0
              ? flights[1].stops.join(', ')
              : 'Без пересадок'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
