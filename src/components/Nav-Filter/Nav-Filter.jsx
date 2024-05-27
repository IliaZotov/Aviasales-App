import React from 'react';
import './Nav-Filter.css';

const NavFilter = () => {
  return (
    <ul className='buttons-bar'>
      <li>
        <button type='button' className='nav-filter-button'>
          Самый дешёвый
        </button>
      </li>
      <li>
        <button type='button' className='nav-filter-button'>
          Самый быстрый
        </button>
      </li>
      <li>
        <button type='button' className='nav-filter-button'>
          Оптимальный
        </button>
      </li>
    </ul>
  );
};

export default NavFilter;
