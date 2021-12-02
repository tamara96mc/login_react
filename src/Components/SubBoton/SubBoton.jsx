import React from 'react';
import {CHANGE_SUBMENU } from '../../redux/types';
import { connect } from 'react-redux';

const SubBoton = (props) => {

    const llevame = () => {
        props.dispatch({type: CHANGE_SUBMENU, payload:props.bloque});
    }

    return (
        <>
            <button className="nav-button" onClick={() => llevame()}>{props.bloque}</button>
        </>
    )
};

export default connect((state) => ({
    peli: state.peli
}))(SubBoton);