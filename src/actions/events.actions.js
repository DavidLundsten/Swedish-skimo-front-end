import { eventsConstants } from '../constants';
import {events} from '../helpers';
import {isNil, isEmpty} from 'ramda';


function get() {
    return dispatch => {
        dispatch(request());
        if(!isNil(events) && !isEmpty(events)){
            dispatch(success(events))
        }
        else {
            failure()
        }
    }
    function request() { return { type: eventsConstants.GET_EVENTS_REQUEST } }
    function success(payload) { return { type: eventsConstants.GET_EVENTS_SUCCESS, payload } }
    function failure() { return { type: eventsConstants.GET_EVENTS_FAILURE } }
}

export const eventsActions = {
    get,
};
