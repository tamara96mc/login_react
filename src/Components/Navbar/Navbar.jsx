import React ,{ useEffect} from 'react';
import { connect } from 'react-redux';
import Boton from '../Boton/Boton';
import Buscador from '../Buscador/Buscador';


const Navbar = (props) => {

    return (
        <div className="navbar">
              {props.credentials?.user.name && <Boton destino="Home" url="/"/>}
              {props.credentials?.user.name && <Buscador/>}
              {!props.credentials?.user.name && <Boton destino="Login" url="/login"/>}
              {!props.credentials?.user.name && <Boton destino="Registro" url="/register"/>}
              {props.credentials?.user.name && <Boton destino="Perfil" url="/profile"/> }
              {props.credentials?.user.rol=='admin' && <Boton destino="Admin" url="/admin"/>}             
        </div>
    )
};

export default connect((state) => ({
    credentials: state.credentials
}))(Navbar);