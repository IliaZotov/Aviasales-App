import React from 'react';
import Logo from '../Logo/Logo';
import NavFilter from '../Nav-Filter/Nav-Filter';
import SideFilter from '../Side-Filter/Side-Filter';
import ShowMoreButton from '../Show-More-Button/Show-More-Button';
import './App.css';
import TicketsList from '../Tickets-List/Tickets-List';

const App = () => {
  return (
    <div className='app'>
      <Logo />
      <div className='content'>
        <SideFilter />
        <div className='wrapper'>
          <NavFilter />
          <TicketsList />
          <ShowMoreButton/>
        </div>
      </div>
    </div>
  );
};

export default App;
