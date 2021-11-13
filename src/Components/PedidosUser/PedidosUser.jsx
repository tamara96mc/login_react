
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import tokenAuth from '../../config/token';
import foto from '../../img/peli-img.jpg'
const PedidosUser = (props) => {

    useEffect(() => {

        traePedidosUsuario();

    }, []);

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

        <>
        <h3>Película alquilada</h3>
        <div className="basics_row card-order">
            
            <div className="card-data">

                <p><b>Nombre:  </b>Origen</p>
                <p><b>Precio:  </b>23</p>
                <p><b>Fecha inicio:  </b>12/04/2021</p>
                <p><b>Fecha fin:  </b>20/04/2021</p>
            </div>
            <div className="card-img">
            <img src={foto}/>
            </div>
        </div>
       </> 
            );

}

export default connect((state) => ({
                peli: state.peli
}))(PedidosUser);
