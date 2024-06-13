import React from 'react';
import Logo from '../Logo/Logo';
import TabsFilter from '../Tabs-Filter/Tabs-Filter';
import SideFilter from '../Checkbox-Filter/Checkbox-Filter';
import ShowMoreButton from '../Show-More-Button/Show-More-Button';
import './App.scss';
import TicketsList from '../Tickets-List/Tickets-List';

const App = () => {
  return (
    <div className='app'>
      <Logo />
      <div className='content'>
        <SideFilter />
        <div className='wrapper'>
          <TabsFilter />
          <TicketsList />
        </div>
      </div>
    </div>
  );
};

export default App;
