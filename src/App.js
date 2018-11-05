import React, { Component } from 'react';
import './fonts/fonts.css';
import './App.css';
import {Home} from './Pages/Home';
import { Event } from './Pages/Event';
import { Calendar } from './Pages/Calendar';
import {Provider} from 'react-redux';
import {Store} from './helpers';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {Navbar} from "./components";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';


const app = {
    fontFamily: "font-family: 'Alegreya Sans', sans-serif",

}

class App extends Component {
    render() {
        return (               
            <Provider store = {Store()}>
                <div style={app} className="App">
                        <Router>
                            <Navbar/>
                            <Route exact path="/" component={Home} />
                            <Route path="/events" component={Event} />
                            <Route path="/calendar" component={Calendar} />'
                            <Route path="/event/:eventId" component={Event} />
                        </Router>
                    </div>
            </Provider>

        );
    }
}

export default App;
