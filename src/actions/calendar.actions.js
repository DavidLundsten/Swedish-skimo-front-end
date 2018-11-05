import { isNil, isEmpty } from 'ramda';
import { calendarConstants } from '../constants';
import { whenMapDispatchToPropsIsObject } from 'react-redux/es/connect/mapDispatchToProps';

function get() {
    return dispatch => {
        dispatch(request());

        fetch('https://www.googleapis.com/calendar/v3/calendars/9b83c9heagktgkqe3696l5qvg0@group.calendar.google.com/events?key=AIzaSyDgyOxVKM9wkm6_ebWGopA8eY9QOSdD74E')
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                dispatch(success(myJson));
            });

    }
    function request() { return { type: calendarConstants.GET_CALENDAR_REQUEST } }
    function success(payload) { return { type: calendarConstants.GET_CALENDAR_SUCCESS, payload } }
    function failure() { return { type: calendarConstants.GET_CALENDAR_FAILURE } }
}

export const calendarActions = {
    get,
};
