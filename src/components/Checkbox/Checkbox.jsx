import React, { useEffect, useState } from 'react';
import './Checkbox.scss';
import { useDispatch, useSelector } from 'react-redux';
import checkboxSwitch from '../redux/Action';

const Checkbox = ({ id }) => {
  const dispatch = useDispatch();
  const isActive = useSelector(
    (state) =>
      state.checkboxReducer.items.find((item) => item.id === id).isActive,
  );
  const [isChecked, setIsChecked] = useState(isActive);

  useEffect(() => {
    setIsChecked(isActive);
  }, [isActive]);

  const handleChange = () => {
    dispatch(checkboxSwitch(id, !isActive));
  };

  return (
    <label className='checkbox-container'>
      <input
        className='checkbox'
        type='checkbox'
        checked={isChecked}
        onChange={handleChange}
      />
      <span className='checkmark'></span>
    </label>
  );
};

export default Checkbox;
