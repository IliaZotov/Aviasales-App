import React from 'react';
import './Show-More-Button.scss';

const ShowMoreButton = ({ visibleTickets, setVisibleTickets }) => {
  const onButtonClick = () => {
    setVisibleTickets(visibleTickets + 5);
  };

  return (
    <button
      type='button'
      className='show-more-button'
      onClick={() => onButtonClick()}
    >
      Показать еще 5 билетов!
    </button>
  );
};

export default ShowMoreButton;
