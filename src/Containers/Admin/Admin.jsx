   

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import load from '../../img/load.gif'

const Home = () => {


    const [pedidos, setPedidos] = useState();


        return (
            <div className="container">
            <div className="datos-perfil">
                <p>Tamara Montero Cano</p>
                <p>tamara.96mc@gmail.com</p>
            </div>

            <table className="table-responsive">
                <thead>
                    <tr>
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
                                <td>{pedido.titulo}</td>
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