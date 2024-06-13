import React, { useEffect, useMemo, useState } from 'react';
import './Tickets-List.scss';
import uniqid from 'uniqid';
import { useDispatch, useSelector } from 'react-redux';
import TicketCard from '../Ticket-Card/Ticket-Card';
import { fetchGetId, fetchGetTickets } from '../redux/API/apiAction';
import ErrorComponent from '../ErrorComponent/ErrorComponent';
import Loader from '../BarLoader/BarLoader';
import ShowMoreButton from '../Show-More-Button/Show-More-Button';

const TicketsList = () => {
  const [visibleTickets, setVisibleTickets] = useState(5);
  const { tickets, isLoading, errorMessage, id } = useSelector(
    (state) => state.ticketsSlicer,
  );
  const transferFilters = useSelector((state) => state.checkboxReducer.items);
  const tabs = useSelector((state) => state.tabsSlicer.tabs);
  const dispatch = useDispatch();

  const filterCheckbox = useMemo(() => {
    return (arr) => {
      if (transferFilters.every((filter) => !filter.isActive)) {
        return arr;
      }

      return arr.filter((item) => {
        const ticketFrom = item.segments[0].stops.length;
        const ticektTo = item.segments[1].stops.length;
        return (
          transferFilters.some(
            (filter) =>
              filter.name === 'Без пересадок' &&
              filter.isActive &&
              (ticketFrom === 0 || ticektTo === 0),
          ) ||
          transferFilters.some(
            (filter) =>
              filter.name === '1 пересадка' &&
              filter.isActive &&
              ticketFrom === 1 &&
              ticektTo === 1,
          ) ||
          transferFilters.some(
            (filter) =>
              filter.name === '2 пересадка' &&
              filter.isActive &&
              ticketFrom === 2 &&
              ticektTo === 2,
          ) ||
          transferFilters.some(
            (filter) =>
              filter.name === '3 пересадка' &&
              filter.isActive &&
              ticketFrom === 3 &&
              ticektTo === 3,
          )
        );
      });
    };
  }, [transferFilters]);

  const filtredTicekts = filterCheckbox(tickets);

  const filterTabs = useMemo(() => {
    return (arr) => {
      const activeTab = tabs.find((item) => item.isActive);
      if (!activeTab) return arr;
      switch (activeTab.name) {
        case 'cheap':
          return [...arr].sort((a, b) => a.price - b.price);
        case 'fast':
          return [...arr].sort(
            (a, b) =>
              a.segments[0].duration +
              a.segments[1].duration -
              (b.segments[0].duration + b.segments[1].duration),
          );
        case 'optimal':
          return arr;
        default:
          return arr;
      }
    };
  }, [tabs]);

  useEffect(() => {
    dispatch(fetchGetId());
  }, [fetchGetId]);

  useEffect(() => {
    if (id) {
      dispatch(fetchGetTickets(id));
    }
  }, [fetchGetTickets, id]);

  const ticketsList = useSelector(
    (state) => state.ticketsSlicer.tickets.length,
  );
  const error = errorMessage ? <ErrorComponent /> : null;
  const loader = isLoading ? <Loader /> : null;
  return (
    <div>
      <ul className='card-list'>
        {loader}
        {error}
        {!ticketsList ? (
          <div className='zero-ticket-attention'>Подходящих рейсов нет</div>
        ) : null}
        {!errorMessage &&
          filterTabs(filtredTicekts)
            .slice(0, visibleTickets)
            .map((ticket) => {
              return (
                <li className='card' key={uniqid()}>
                  <TicketCard
                    price={ticket.price}
                    carrier={ticket.carrier}
                    segments={ticket.segments}
                  />
                </li>
              );
            })}
      </ul>
      <ShowMoreButton
        visibleTickets={visibleTickets}
        setVisibleTickets={setVisibleTickets}
      />
    </div>
  );
};

export default TicketsList;
