import React, { Component } from 'react';
import {ReactDOM} from 'react-dom';
import connect from "react-redux/es/connect/connect";
import {TextField} from '@material-ui/core';

const style ={
    section:{
        minHeight:'50vh',
        backgroundColor: '#333333',
        display:'flex',
        color:'white',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    },

}



class Footer extends Component {

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render (){
        return (
            <React.Fragment>
                <div style={style.section}>
                    <h1 style={{fontWeight:'300',}}>Prenumerera på vårt nyhetsbrev!</h1>

                    <TextField
                        id="outlined-name"
                        label="Name"
                        value={'hej'}
                        onChange={this.handleChange('name')}
                        margin="normal"
                        variant="outlined"
                    />
                </div>
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

const connectedApp =  connect(mapStateToProps, mapDispatchToProps)(Footer);

export {connectedApp as Footer};





