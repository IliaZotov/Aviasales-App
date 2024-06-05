import { unhover } from '@testing-library/user-event/dist/hover.js';
import { CHECKBOX_SWITCH } from './Types.js';

const initialState = {
  items: [
    { id: 1, name: 'Все', isActive: false },
    { id: 2, name: 'Без пересадок', isActive: false },
    { id: 3, name: '1 пересадка', isActive: false },
    { id: 4, name: '2 пересадка', isActive: false },
    { id: 5, name: '3 пересадка', isActive: false },
  ],
};

const reducer = (state = initialState, action) => {
  console.log('Reducer >>>', action, state);
  switch (action.type) {
    case CHECKBOX_SWITCH:
      if (action.id === 1) {
        const allItemsActive = state.items.every((item) => item.isActive);
        const updatedItems = state.items.map((item) => ({
          ...item,
          isActive: !allItemsActive,
        }));
        return { ...state, items: updatedItems };
      } else {
        const updatedItems = state.items.map((item) =>
          item.id === action.id ? { ...item, isActive: !item.isActive } : item
        );
        console.log('Updated items >>>', updatedItems);

        const isEveryActive = updatedItems
          .slice(1)
          .every((item) => item.isActive);

        const finalItems = updatedItems.map((item) => {
          return item.id === 1 ? { ...item, isActive: isEveryActive } : item;
        });
        return {
          ...state,
          items: finalItems,
        };
      }
    default:
      return state;
  }
};

export default reducer;
