import { combineReducers } from 'redux';
import { events } from './events.reducer';
import { navbar } from './navbar.reducer';


export default combineReducers({
  events,
    navbar

});