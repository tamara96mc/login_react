import React from 'react';
import { useNavigate } from 'react-router-dom';

const Boton = (props) => {

    const history = useNavigate();

    const llevame = () => {
        history(props.url);
    }

    return (
        <>
            <button className="nav-button" onClick={() => llevame()}>{props.destino}</button>
        </>
    )
};

export default Boton;