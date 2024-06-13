import { combineReducers } from 'redux';
import checkboxReducer from './CheckboxFilter/CheckboxReducer';
import ticketsSlicer from './TicketsSlicer/TicketsSlicer';
import tabsSlicer from './TabsSlicer/TabsSlicer';

const rootReducer = combineReducers({
  checkboxReducer,
  ticketsSlicer,
  tabsSlicer,
});

export default rootReducer;
