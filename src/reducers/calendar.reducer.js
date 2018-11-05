import { calendarConstants } from '../constants';

export function calendar(state = { isLoading: true}, action) {

    switch (action.type) {
        case calendarConstants.GET_CALENDAR_REQUEST:
            return {
                isLoading: true,
                ...state,
            }
        case calendarConstants.GET_CALENDAR_SUCCESS:
            return {
                isLoading: false,
                items:action.payload.items,
                ...state,
            }
        default:
            return state;
    }
}
