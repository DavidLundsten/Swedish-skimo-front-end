import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import {ReactDOM} from 'react-dom';
import logo from '../logo.svg';
import connect from "react-redux/es/connect/connect";
import {navbarActions} from "../actions";
import {Menu as MenuIcon} from 'grommet-icons';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const style ={
    navbar:
        {
            backgroundColor: 'transparent',
            position:'fixed',
            top:0,
            width:'100%',
            transition: '1.5s'
        },
    navbarHidden:
        {
            backgroundColor: 'transparent',
            position:'fixed',
            top:0,
            width:'100%',
            opacity:'0',
            transition: '0.5s'
        },
    mobileMenu:
        {
            backgroundColor: 'transparent',
            position:'fixed',
            top:0,
            width:'100%',
            transition: '1.5s',
            padding:'20px',
            float:'right',
            zIndex:'99'
        },
    mobileMenuHidden:
        {
            backgroundColor: 'transparent',
            position:'fixed',
            top:0,
            width:'100%',
            opacity:'0',
            transition: '0.5s',
            padding:'20px',
            float:'right'
        },
    icon:
        {
            float:'right',
            marginRight:'50px'
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
            float:'right',
            padding:'20px',
            display: 'inline-block',
            textDecoration: 'none',
            color: 'white',
            fontSize:'16px',
            textTransform:'uppercase'
        },
}


class Navbar extends Component {

    state = {
        anchorEl: null,
    };

    componentDidMount(){
        window.addEventListener('scroll', (e) => this.handleScroll(e));
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event){
        const scrollposition = event.srcElement.scrollingElement.scrollTop;

        if(scrollposition > 60 && this.props.navbar.fullwidth ){
            this.props.dispatch(navbarActions.hideFullwidthBar())
        }
        else if (scrollposition < 60 && !this.props.navbar.fullwidth ){
            this.props.dispatch(navbarActions.showFullwidthBar())
        }
        else {
        }
    }

    handleClose = (e) => {
        console.log(e)
        this.props.dispatch(navbarActions.closeDropdownMenu())
    };

    render (){
        return (
            <React.Fragment>
                <Router>
                    <nav style={this.props.navbar.fullwidth? style.navbar : style.navbarHidden}>

                        <img  style={style.logo} src={logo}  alt="fireSpot"/>
                        <Link style={style.link} to={"/kalender"}> Kalender </Link>
                        <Link style={style.link} to={"/resultat"}> Resultat </Link>
                        <Link style={style.link} to={"/om-oss"}> Om oss </Link>
                    </nav>
                    <nav style={!this.props.navbar.fullwidth? style.mobileMenu : style.mobileMenuHidden}>
                        <MenuIcon style={style.icon} color='white' size='large' aria-haspopup="true" onClick={()=> this.props.dispatch(navbarActions.openDropdownMenu())}  aria-owns={this.props.navbar.fullwidth ? 'simple-menu' : null}/>
                        <Menu
                            id="simple-menu"
                            open={this.props.dropdownMenu}

                            onClose={()=> this.props.dispatch(navbarActions.closeDropdownMenu())}
                            anchorReference="none"
                            PaperProps={{
                                style: {
                                    width: '20%',
                                    padding: 0,
                                    right: '1%',
                                    top:'3%',
                                    opacity: '0.9'
                                },
                            }}

                            MenuListProps={{
                                style: {
                                    padding: 0,
                                    backgroundColor:'transparent'

                                },
                            }}
                        >
                            <MenuItem style = {style.menuItem} onClick={this.handleClose}>Tävlingar</MenuItem>
                            <MenuItem style = {style.menuItem} onClick={this.handleClose}>Kalender</MenuItem>
                            <MenuItem style = {style.menuItem} onClick={this.handleClose}>Om oss</MenuItem>
                        </Menu>
                    </nav>

                </Router>
            </React.Fragment>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        navbar: state.navbar,
        dropdownMenu: state.navbar.dropdownMenu
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
}

const connectedApp =  connect(mapStateToProps, mapDispatchToProps)(Navbar);

export {connectedApp as Navbar};





