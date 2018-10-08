import { eventsConstants } from '../constants';

export function events(state = [], action) {

    switch (action.type) {
        case eventsConstants.GET_EVENTS_REQUEST:
            return  {
                ...state,
                events: action.payload
            }
        case eventsConstants.GET_EVENTS_SUCCESS:
            return  {
                ...state,
                events: action.payload
            }
        case eventsConstants.GET_EVENTS_FAILURE:
            return  {
                ...state,
                events: action.payload
            }
        default:
            return state;
    }
}
