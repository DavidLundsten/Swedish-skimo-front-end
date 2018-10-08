import {Navbar} from "../Components/Navbar";
import {Clock, Grid, Box} from "grommet/es6";
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {eventsActions} from "../actions";


class Home extends Component{

    componentDidMount(){
        this.props.dispatch(eventsActions.get())
    }
    render(){
        return(
            <header className="App-header">
                <Grid columns={'1/2'}>
                    <Box basis={'1/2'}>
                        <Clock precision={"seconds"} size={'xlarge'} />
                        <Clock precision={"seconds"} size={'xlarge'} type={"digital"}/>
                    </Box>
                    <Box>

                    </Box>


                </Grid>

            </header>
        )
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

const connectedApp =  connect(mapStateToProps, mapDispatchToProps)(Home);

export {connectedApp as Home};