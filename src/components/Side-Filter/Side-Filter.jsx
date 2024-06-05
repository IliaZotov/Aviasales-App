import React from 'react';
import './Side-Filter.css';
import Checkbox from '../Checkbox/Checkbox';
import { useSelector } from 'react-redux';
import uniqid from 'uniqid';

const SideFilter = () => {
  const items = useSelector((state) => state.items);
  const elemnts = items.map((item) => {
    return (
      <li className='side-filter-item' key={uniqid()}>
        <Checkbox id={item.id} />
        <span>{item.name}</span>
      </li>
    );
  });
  return (
    <aside className='side-filter-container'>
      <h5 className='side-filter-title'>Количество пересадок</h5>
      <ul className='side-filter-list'>{elemnts}</ul>
    </aside>
  );
};

export default SideFilter;
