
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { REMOVE_ORDER } from '../../redux/types';


const PedidosUser = (props) => {

    const [orderData, setOrderData] = useState();

    useEffect(() => {

        setOrderData(props.peli);

    }, [props.peli.pedido]);

    const handleSubmit = () => {
    
        props.dispatch({ type: REMOVE_ORDER, payload: {
            select_peli : '',
            pedido: ''
        }});

        setOrderData(null);
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
                peli: state.peli
}))(PedidosUser);
