

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import load from '../../img/Ellipsis-1.2s-217px.gif';
import clienteAxios from '../../config/axios';
import { connect } from 'react-redux';

const Admin = (props) => {

    const [pedidosActivos, setPedidosActivos] = useState([]);

    useEffect(() => {
        traePeliculas("/pedido");
    }, []);

    const traePeliculas = async (endPoint) => {

        try {
            let token = props.credentials.token;
            //CREAMOS LA CONFIGURACIÓN DEL HEADER QUE SE VA A MANDAR
            let config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            let res = await clienteAxios.get(endPoint, config);

            console.log('datos' , res.data);
            setPedidosActivos(res.data);

        } catch (error) {
            console.log(error);
        }
    };


    return (
        <>
        <h3>Administación de pedidos</h3>
            {pedidosActivos ?

                <div className="container">
                    <table className="table-responsive">
                        <thead>
                            <tr>
                                <th>Usuario</th>
                                <th>Pelicula</th>
                                <th>Precio</th>
                                <th>Fecha inicial</th>
                                <th>Fecha fin</th>
                            </tr>
                        </thead>
                        <tbody>

                            {pedidosActivos.map(pedido => {
                                return (
                                    <tr>
                                        <td>{pedido.cliente.name}</td>
                                        <td>{pedido.pelicula.title}</td>
                                        <td>{pedido.precio}</td>
                                        <td>{pedido.fechaAlquiler}</td>
                                        <td>{pedido.fechaDevolucion}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                :
                <div className="img-load">
                    <img src={load} alt="" />
                </div>
            }
        </>
    )

};

export default connect((state) => ({
    credentials: state.credentials
}))(Admin);