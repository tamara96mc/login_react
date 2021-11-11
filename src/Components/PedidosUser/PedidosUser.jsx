
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import tokenAuth from '../../config/token';

const PedidosUser = (props) => {

    useEffect(() => {

        traePedidosUsuario();

    },[]);

    const traePedidosUsuario = async () => {

        try {
        
        // let res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=51c1099989a6923f3d12154210fc2cf7&language=en-US&page=1");
    
        // setPeliculas(res.data.results);
            
        } catch (error) {
            
        }
     
};

    const pedidos = [
        {
            date_inicial: "2019/12/01",
            date_fin: "2019/12/01",
            precio: 1,
            titulo: 'sfsdf'
        },
        {
            date_inicial: "2019/12/01",
            date_fin: "2019/12/01",
            precio: 1,
            titulo: 'sfsdf'
        },
        {
            date_inicial: "2019/12/01",
            date_fin: "2019/12/01",
            precio: 1,
            titulo: 'sfsdf'
        }
    ];


    return (
        <div className="container">

<h3>Mis pedidos</h3>
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
    );

}

export default connect((state)=>({
    credentials: state.credentials
}))(PedidosUser);
 