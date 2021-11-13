   

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import load from '../../img/load.gif'

const Home = () => {


    const [pedidos, setPedidos] = useState(
        [{
            usuario: 'Sofia',
            pelicula : 'El rey leon',
            precio : 23,
            date_inicial: '12/12/2019',
            date_fin : '15/12/2019'
        },
        {
            usuario: 'Tomás',
            pelicula : 'Origen',
            precio : 54,
            date_inicial: '06/03/2020',
            date_fin : '09/03/2020'
        },
        {
            usuario: 'Luis',
            pelicula : 'In the time',
            precio : 43,
            date_inicial: '14/05/2021',
            date_fin : '17/06/2021'
        }]
    );


        return (
            <div className="container">
                <h3>Administación de pedidos</h3>
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

                    {pedidos.map(pedido => {
                        return (
                            <tr>
                                <td>{pedido.usuario}</td>
                                <td>{pedido.pelicula}</td>
                                <td>{pedido.precio}</td>
                                <td>{pedido.date_inicial}</td>
                                <td>{pedido.date_fin}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
        )

};

export default Home;