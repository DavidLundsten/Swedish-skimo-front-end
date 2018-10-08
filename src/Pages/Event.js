import {Navbar} from "../Components/Navbar";
import {Box} from "grommet/es6";
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {eventsActions} from "../actions";


const style={
    box:{
        background: 'linear-gradient( #219bba, white)',
        minHeight:'400px'
    }
}

class Events extends Component{

    componentDidMount(){
        this.props.dispatch(eventsActions.get())
    }
    render(){
        return(
            <React.Fragment>
                <header className="App-header" style={{minHeight: '35vh'}} >
                    <h1 style ={{paddingTop: '35px'}}>Funäsdalen rando</h1>
              
                </header>
                                   <Box style={style.box}>
                                             <h3>Fancy underrubrik</h3>
                                       
                                   </Box>
            </React.Fragment>
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

const connectedApp =  connect(mapStateToProps, mapDispatchToProps)(Events);

export {connectedApp as Event};