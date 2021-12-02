

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import SubBoton from '../../Components/SubBoton/SubBoton';
import VerPedidos from '../../Components/VerPedidos/VerPedidos';
import VerUsuarios from '../../Components/VerUsuarios/VerUsuarios';

const Admin = (props) => {

    const [bloque, setBloque] = useState();

    useEffect(() => {
      
        setBloque(props.submenu);
        
    }, [props.submenu]);

    return (
        <div className="basics_row">

            <div className="basics_column">
                <SubBoton bloque="Pedidos" />
                <SubBoton bloque="Usuarios" />
            </div>

            <div lassName="basics_row">
                {(() => {
                    switch (bloque) {
                        case 'Pedidos':
                            return (
                                <VerPedidos/>
                            )
                        case 'Usuarios':
                            return (
                                <VerUsuarios/>
                            )
                        default:
                            return (
                                <VerPedidos/>
                            )
                    }
                })()}
            </div>
        </div>
    )

};

export default connect((state) => ({
    submenu: state.submenu
}))(Admin);