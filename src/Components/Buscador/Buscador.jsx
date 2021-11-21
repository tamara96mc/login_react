import React, { useState } from 'react';
import { connect } from 'react-redux';
import {NEW_SEARCH } from '../../redux/types';

const Buscador = (props) => {


    const [buscador, setBuscador] = useState();


    const handleChangeSelect = (e) => {
        //Función encargada de bindear el hook con los inputs.
        setBuscador({ 'tipo': e.target.value });
        console.log(buscador)
    }

    const handleChange = (e) => {
        //Función encargada de bindear el hook con los inputs.
        setBuscador({ ...buscador, [e.target.name]: e.target.value });
        console.log(buscador)
    }

    
    const handleSubmit = () => {

            props.dispatch({type: NEW_SEARCH, payload:buscador});

    };

    return (
        <div className="form-buscador">
         {/* <label>Buscar por </label> */}
         <div className="campos">
            <select name="tipo" value={buscador?.tipo}  onChange={e => handleChangeSelect(e)}>
                <option>Buscar por...</option>
                <option value="titulo" name="tipo">Título</option>
                <option value="actor"name="tipo">Actor</option>
                <option value="genero" name="tipo">Género</option>
            </select>
            <input id='input_buscador' type="text" name="valor"  onChange={e =>handleChange(e)}/>
                <button onClick={() => handleSubmit()}>Buscar</button>
        </div>
        </div>
    )
};
export default connect((state) => ({
    peli: state.peli
}))(Buscador);