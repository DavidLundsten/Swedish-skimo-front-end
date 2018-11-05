import { Box } from "grommet/es6";
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { calendarActions } from "../actions";
import { isEmpty, isNil } from 'ramda';


class Event extends Component {

    componentDidMount() {
        this.props.dispatch(calendarActions.get());
    }
    render() {
        
        if (isEmpty(this.props.match.params.eventId) || isNil(this.props.match.params.eventId) || isNil(this.props.state.calendar.items) || isEmpty(this.props.state.calendar.items) ) {
            return <div>Cannot find event</div>
        }
        else {
            const event = this.props.state.calendar.items.find(e => e.id === this.props.match.params.eventId)
            console.log(event)
            return (
                <React.Fragment>
                    <header className="App-header" style={{ minHeight: '35vh' }} >
                        <h1 style={{ paddingTop: '35px' }}>{event.summary} </h1>
                    </header>
                    
                    
                    <Box >
                        <h5>{event.start.dateTime} - {event.end.dateTime}</h5>
                        <h3>{event.location}</h3>
                        <h3>{event.description}</h3>
                        <small>Senast uppdaterad: {event.updated}</small>
                    </Box>
                </React.Fragment>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        state
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
}

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(Event);

export { connectedApp as Event };