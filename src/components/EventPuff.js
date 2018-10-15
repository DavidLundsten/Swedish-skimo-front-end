import React from "react";
import {isNil} from 'ramda';
import Radium from 'radium';

const style = {

    container: {
        textAlign:'center',
        opacity:'0.6',
        transition: 'transform 0.4s ease-in-out',
        padding:'30px',
        ':hover': {
            opacity:'0.9',
            transform: 'scale(1.05)'
        }
    },

    typeHeader: {
        color:'white',
        fontWeight:'250',
        margin:'0rem'
    },
    dateHeader: {
        color:'white',
        fontWeight:'300',
        margin:'0.3rem',
        marginBottom:'10px'
    },
    mainHeader: {
        color:'white',
        fontWeight:'280',
        height:'3rem'
    },
    line: {
        width:'30%',
        margin:'0 auto',
        border:'1px solid rgba(84,166,187,.90)',
        display:'block'
    },
    typeImage: {
        color:'white',
        height:'228px',
        backgroundPosition: 'center',
        backgroundRepeat  : 'no-repeat',
    }
}

const component = (props) => {
    function getTypeBackground(type) {
        switch(type){
            case 'Race':
                return '/images/mtn.png'
                break;
            case 'Meetup':
                return '/images/ppl.png'
                break;
            case 'Camp':
                return '/images/WV.png'
            default:
                return '/images/MtnSilhouette.png'
        }
    }

    return(
        <a>
            <div style={style.container}>
                <h3 style={style.typeHeader}>{!isNil(props.event.type)?props.event.type.map((type)=> type+' ' ):'Evenemang'}</h3>
                <h5 style={style.dateHeader}>{props.event.startDate.format("DD.MM YYYY")}</h5>
                <div style={style.line}/>
                <h1 style={style.mainHeader}> {props.event.name}</h1>
                <img src={getTypeBackground(props.event.type[0])} />
            </div>
        </a>
    )
}

const radiumComponent = Radium(component)

export {radiumComponent as EventPuff}
