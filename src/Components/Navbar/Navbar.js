import React ,{ useEffect} from 'react';
import { connect } from 'react-redux';
import Boton from '../Boton/Boton';
import Buscador from '../Buscador/Buscador';


const Navbar = (props) => {

    useEffect(() => {
        
        console.log('navbar',props);

    }, [props.credentials]);

    return (
        <div className="navbar">
              {props.credentials?.user.name ? <Boton destino="Home" url="/"/> : null}
              {props.credentials?.user.name ?  <Buscador/> : null}
              {props.credentials?.user.name ? null  : <Boton destino="Login" url="/login"/>}
              {props.credentials?.user.name ? null : <Boton destino="Registro" url="/register"/>}
              {props.credentials?.user.name ? <Boton destino="Perfil" url="/profile"/> : null}           
        </div>
    )
};

export default connect((state) => ({
    credentials: state.credentials
}))(Navbar);