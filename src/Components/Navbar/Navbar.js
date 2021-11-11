import React from 'react';

import Boton from '../Boton/Boton';
import Buscador from '../Buscador/Buscador';

const Navbar = () => {

    return (
        <div className="navbar">
            
            <Boton destino="Home" url="/" />
            <Buscador/>
            <Boton destino="Login" url="/login" />
            <Boton destino="Registro" url="/register" />
            <Boton destino="Perfil" url="/profile" />
        </div>
    )
};

export default Navbar;