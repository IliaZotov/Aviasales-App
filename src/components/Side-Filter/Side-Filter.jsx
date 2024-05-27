import React from 'react';
import './Side-Filter.css';
import Checkbox from '../Checkbox/Checkbox';

const SideFilter = () => {
  return (
    <aside className='side-filter-container'>
      <h5 className='side-filter-title'>Количество пересадок</h5>
      <ul className='side-filter-list'>
        <li className='side-filter-item'>
          <Checkbox />
          <span>Все</span>
        </li>
        <li className='side-filter-item'>
          <Checkbox />
          <span>Без пересадок</span>
        </li>
        <li className='side-filter-item'>
          <Checkbox />
          <span>1 пересадка</span>
        </li>
        <li className='side-filter-item'>
          <Checkbox />
          <span>2 пересадки</span>
        </li>
        <li className='side-filter-item'>
          <Checkbox />
          <span>3 пересадки</span>
        </li>
      </ul>
    </aside>
  );
};

export default SideFilter;
