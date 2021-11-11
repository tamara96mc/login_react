import React from 'react';

const Buscador = () => {

    return (
        <div className="form-buscador">
         <label for="cars">Buscar por </label>
         <div className="campos">
            <select name="cars">
                <option value="volvo">Título</option>
                <option value="saab">Actor</option>
                <option value="opel">Género</option>
            </select>
            <input type="text"/>
                <button>Buscar</button>
        </div>
        </div>
    )
};
export default Buscador;