import React, { useState, useEffect } from 'react';
import clienteAxios from '../../config/axios';
import { connect } from 'react-redux';

const Pelis = (props) => {

    const [peli, setPeli] = useState(JSON.parse(localStorage.getItem("choosenFilm")));

   
    useEffect(() => {

        console.log('pelis', props.credentials);

    },[]);

    const order = async () => {

        const pedido = {
            fechaAlquiler: "20/12/2021",
            fechaDevolucion: "25/12/2021",
            peliculaId: "617e9334b41920d10c1a1620", 
            precio: 234,
            clienteId: "617acc6069e85e708a48237c"
    };

        try {
            
            let token = props.credentials.token;
            //CREAMOS LA CONFIGURACIÓN DEL HEADER QUE SE VA A MANDAR
            let config = {
                headers: { Authorization: `Bearer ${token}` }
            };

            let res = await clienteAxios.post("/pedido", pedido ,config);
            console.log('datos' ,res.data);
        } catch (error) {
            console.log(error);
        }
    }


    return (

        <div className="form-card">
            <img className="cartel"
                alt="Card image cap"
                src={`https://image.tmdb.org/t/p/original/${peli.poster_path}`}
            />
            <div className="card-body">
                <div className="card-title" tag="h5">
                    {peli.original_title}
                </div>
                <div className="card-text">
                    {peli.overview}
                </div>
                <div className="card-text">
                    <small className="text-muted">
                        {peli.release_date}
                    </small>
                </div>
            </div>
            <button className="send-button" onClick={() => order()}>Alquilar</button>

        </div>



    )
}
export default connect((state)=>({
    credentials: state.credentials
}))(Pelis);
 