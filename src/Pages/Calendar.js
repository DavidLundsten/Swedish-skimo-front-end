import { Box } from "grommet/es6";
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { eventsActions } from "../actions";
import { calendarActions } from "../actions/calendar.actions";
import { isNil, isEmpty } from 'ramda';
import { Link } from 'react-router-dom';
import { Paper } from '@material-ui/core';
import './Styles/Calendar.css';


class Events extends Component {

    componentDidMount() {
        this.props.dispatch(calendarActions.get());
    }

    render() {
        return (
            <React.Fragment>
                <Box style={{marginTop:"100px"}}>

                   
                    <ul>
                        {!isNil(this.props.items) && !isEmpty(this.props.items) ? this.props.items.map((item) => <Link to={`/event/${item.id}`}> <Paper className={"eventPaper"}>
                            {item.summary}
                    </Paper> <br/></Link>)  : null}
                  </ul>
                </Box>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.calendar.isLoading,
        items: state.calendar.items
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
}

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(Events);

export { connectedApp as Calendar };