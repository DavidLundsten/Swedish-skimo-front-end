import React, { Component } from 'react';
import { connect } from 'react-redux';
import {eventsActions} from "../actions";
import {Grid} from '@material-ui/core';
import YouTube from 'react-youtube';
import {isNil, isEmpty} from 'ramda';
import {EventPuff, Footer} from '../components';


const style = {
    textbox:{
        backgroundColor:'white',
        opacity:'0.6',
        height:'100%',
    },
    section:{
        minHeight:'100vh',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    }
};

const opts = {
    width: '540',
    height:'300',
    playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        modestbranding: 1,
        iv_load_policy: 3,
    }
};

class Home extends Component{
    componentDidMount(){
        this.props.dispatch(eventsActions.get())
    }
    render(){
        console.log(this.props)
        if(isNil(this.props.events)){
            console.log('null')
            return null
        }
        return(
            <React.Fragment>
                <header className="App-header">
                    <Grid container style = {{maxWidth:'900px'}}>
                        <Grid item xs={12}>
                            <h1>It's here.</h1>
                            <p>Get the story</p>
                        </Grid>
                    </Grid>
                </header>
                <div style={{...style.section, minHeight:'21rem', backgroundColor:'#0A080E'}}>
                    <Grid container spacing={16}>

                        {this.props.events.map((event, key)=> {

                           if(key <4){
                                  return (
                                      <Grid item xl lg md sm={6} xs={12}>
                                          <EventPuff event={event}/>
                                      </Grid>
                                  )
                           }
                           else
                           {
                               return null
                           }
                        })
                        })

                    </Grid>
                </div>


                <div style={style.section}>
                    <Grid container style = {{maxWidth:'900px'}}>

                        <Grid item xs={12}>
                            <YouTube
                                videoId="bjCl1FVCd9k"
                                opts={opts}
                                onReady={this._onReady}
                            />
                        </Grid>

                    </Grid>
                </div>
                <div style={{...style.section, backgroundColor:'#03293C'}}>
                    <Grid container style = {{maxWidth:'900px'}}>
                        <Grid item xs={12}>
                            <h1 style={{color:'white'}}>It's here.</h1>
                            <p style={{color:'white'}}>Get the story</p>
                        </Grid>

                    </Grid>
                </div>
                <Footer/>
            </React.Fragment>
        )
    }
    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
}



const mapStateToProps = (state) => {
    return {
        events: state.events.events
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
}

const connectedApp =  connect(mapStateToProps, mapDispatchToProps)(Home);
export {connectedApp as Home};