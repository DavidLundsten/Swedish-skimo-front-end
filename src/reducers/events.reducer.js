import { eventsConstants } from '../constants';

export function events(state = [], action) {

    switch (action.type) {
        case eventsConstants.GET_EVENTS_REQUEST:
            return  {
                ...state,
            }
        case eventsConstants.GET_EVENTS_SUCCESS:
            const sortedArray = action.payload.sort(function(a, b) {return a.startDate-b.startDate});
            return  {
                ...state,
                events: sortedArray
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
