import React, { useState, useEffect } from 'react';
import clienteAxios from '../../config/axios';
import { connect } from 'react-redux';

const VerPedidos = (props) => {

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        traePeliculas("/api");
    }, []);


    const traePeliculas = async (endPoint) => {

        try {
            let res = await clienteAxios.get(endPoint);

            setUsuarios(res.data);

        } catch (error) {
            console.log(error);
        }
    };

    const findUser = (e) => {


        const filtered = usuarios.filter(word => {
    
            return word.name.toLowerCase().match(e.target.value.toLowerCase());

        })
        console.log("filtered2:", filtered)
        setUsuarios(filtered);
    }

    return (
        <>
        <h3>Administación de Usuarios</h3>
        <input className="imput-search-home" type="text" name="user" onChange={findUser} t lenght="30" placeholder="Escribe nombre usuario" />
            {usuarios[0] ?

                <div className="container">
                    <table className="table-responsive">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Correo</th>
                                <th>Rol</th>
                            </tr>
                        </thead>
                        <tbody>

                            {usuarios.map(usuario => {
                                return (
                                    <tr key={usuario._id}>
                                        <td>{usuario.name}</td>
                                        <td>{usuario.email}</td>
                                        <td>{usuario.rol}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                :
                <div className="img-load">
                    <p className="no-pedidos">No ha pedidos activos</p>
                </div>
            }
        </>
    )

};

export default connect((state) => ({
    credentials: state.credentials
}))(VerPedidos);