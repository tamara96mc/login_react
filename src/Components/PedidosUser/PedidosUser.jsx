
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { REMOVE_ORDER } from '../../redux/types';


const PedidosUser = (props) => {

    const [orderData, setOrderData] = useState();

    useEffect(() => {

        setOrderData(props.peli);

    }, [props.peli.pedido]);

    const handleSubmit = async () => {

        const pedido = {
            fechaAlquiler: orderData.pedido.fechaAlquiler,
            fechaDevolucion: orderData.pedido.fechaDevolucion,
            pelicula: orderData.pedido.pelicula,
            precio:  orderData.pedido.precio,
            cliente: orderData.pedido.cliente,
            activo: false
        }

        try {
            let token = props.credentials.token;
            let config = {
                headers: { Authorization: `Bearer ${token}` }
            };

            console.log('id' + orderData.select_peli._id + ' pedid ' , pedido);

            let res = await axios.put(`https://api-tmc-pelis.herokuapp.com/pedido/${orderData.pedido._id}`, pedido, config);
            props.dispatch({ type: REMOVE_ORDER, payload: {
                select_peli : '',
                pedido: ''
            }});
            setOrderData(null);

        } catch (error) {
            console.log(error)
        }
        
    }


    return (
        <>
        {orderData?.pedido &&
            <>
        <h3>Película alquilada</h3>
        <div className="basics_row card-order">
            
            <div className="card-data">

                <p><b>Nombre:  </b>{orderData.select_peli.title}</p>
                <p><b>Precio:  </b>{orderData.pedido.precio}</p>
                <p><b>Fecha inicio:  </b>{orderData.pedido.fechaAlquiler}</p>
                <p><b>Fecha fin:  </b>{orderData.pedido.fechaDevolucion}</p>
            </div>
            <div className="card-img">
            <img src={`https://image.tmdb.org/t/p/original/${orderData.select_peli.poster_path}`}/>
            </div>
        </div>
        <div className="send-button" onClick={handleSubmit}>Finalizar reserva</div>
       </> 
        }
  </>
        
);

}

export default connect((state) => ({
            credentials: state.credentials,
                peli: state.peli
}))(PedidosUser);
