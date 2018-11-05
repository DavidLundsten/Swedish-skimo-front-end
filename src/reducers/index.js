import { combineReducers } from 'redux';
import { events } from './events.reducer';
import { navbar } from './navbar.reducer';
import { calendar } from './calendar.reducer';


export default combineReducers({
  events,
    navbar,
    calendar

});