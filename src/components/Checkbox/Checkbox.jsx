import React, { useState } from 'react';
import './Checkbox.css';

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className='checkbox-container'>
      <input
        className='checkbox'
        type='checkbox'
        checked={isChecked}
        onChange={toggleCheckbox}
      />
      <span className='checkmark'></span>
    </label>
  );
};

export default Checkbox;
