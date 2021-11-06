import React from 'react';

import './Navbar.css';
import Boton from '../Boton/Boton';


const Navbar = () => {

    return (
        <div className="designHeader">
            <Boton destino="Login" url="/" />
            <Boton destino="Registro" url="/register" />
            <Boton destino="Perfil" url="/profile" />
        </div>
    )
};

export default Navbar;