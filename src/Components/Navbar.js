import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import {ReactDOM} from 'react-dom';
import logo from '../logo.svg';

const style ={
    navBar:
        {
            backgroundColor: 'transparent',
            position:'fixed',
            top:0,
            width:'100%',

        },
    logo:
        {
            width:'70px',
            float:'left',
            padding:'5px',
        },
    link:
        {
            height:'100%',
            float:'left',
            padding:'20px',
            display: 'inline-block',
            textDecoration: 'none',
            color: 'white',
            fontSize:'16px',
            textTransform:'uppercase'
        }
}


export class Navbar extends Component {

    render (){
        const props = this.props
        return (
            <React.Fragment>
                <Router>
                    <nav style={style.navBar}>
                        <img  style={style.logo} src={logo}  alt="fireSpot"/>
                        <Link style={style.link} to={"/kalender"}> Kalender </Link>
                        <Link style={style.link} to={"/resultat"}> Resultat </Link>
                        <Link style={style.link} to={"/om-oss"}> Om oss </Link>
                        <Link style={{...style.link, float:'right'}}> Logga in </Link>
                    </nav>
                </Router>


            </React.Fragment>
        )
    }}





