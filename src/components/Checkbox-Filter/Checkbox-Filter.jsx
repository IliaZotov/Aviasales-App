import React from 'react';
import './Checkbox-Filter.scss';
import { useSelector } from 'react-redux';
import uniqid from 'uniqid';
import Checkbox from '../Checkbox/Checkbox';

const CheckboxFilter = () => {
  const items = useSelector((state) => state.checkboxReducer.items);
  const elemnts = items.map((item) => {
    return (
      <li className='side-filter-item' key={uniqid()}>
        <label className='side-filter-label'>
          <Checkbox id={item.id} />
          <span>{item.name}</span>
        </label>
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

export default CheckboxFilter;
