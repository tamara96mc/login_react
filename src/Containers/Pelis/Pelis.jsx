import React, { useState, useEffect } from 'react';
import clienteAxios from '../../config/axios';
import { connect } from 'react-redux';
import { ORDER_PELI } from '../../redux/types';
import { useNavigate } from 'react-router-dom';

const Pelis = (props) => {

    const [peli, setPeli] = useState();
    const [pedido, setPedido] = useState();
    const [fechas, setFechas] = useState();
    const [cambiarForm, setCambiarForm] = useState(false);

    let navigate = useNavigate();

    useEffect(() => {
        setPeli(props.peli.select_peli);
        console.log('props' , props)
    }, []);

    useEffect(() => {
        setPedido(props.peli.pedido.precio);
    }, [props.peli.pedido.precio]);

    const order = async () => {

        setCambiarForm(true);

    }

    const handleChange = (e) => {

        setFechas({ ...fechas, [e.target.name]: e.target.value });

    }

    const handleSubmit = async () => {

        const pedido = {
            fechaAlquiler: fechas.fecha_inicio,
            fechaDevolucion: fechas.fecha_fin,
            peliculaId: props.peli.select_peli._id,
            precio: Math.floor(Math.random() * (40 - 20)) + 20,
            clienteId: props.credentials.user._id
        };

        try {

            let token = props.credentials.token;
            //CREAMOS LA CONFIGURACIÓN DEL HEADER QUE SE VA A MANDAR
            let config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            let res = await clienteAxios.post("/pedido", pedido, config);
            props.dispatch({ type: ORDER_PELI, payload: res.data });
            navigate("/profile");
        } catch (error) {
            console.log(error);
        }


    }

    return (
        <>

            {cambiarForm ?
                <div className="form">
                    <h3>Seleccionar fechas</h3>
                    <div className="form-group">
                        <input
                            name="fecha_inicio"
                            type="date"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            name="fecha_fin"
                            type="date"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="send-button" onClick={handleSubmit}>Guardar</div>

                </div> 
                : 
                <div className="form-card">
                    <img className="cartel"
                        alt="Card image cap"
                        src={`https://image.tmdb.org/t/p/original/${peli?.poster_path}`}
                    />
                    <div className="card-body">
                        <div className="card-title" tag="h5">
                            {peli?.title}
                        </div>
                        <div className="card-text">
                            {peli?.overview}
                        </div>
                        <div className="card-text">
                            <small className="text-muted">
                                {peli?.release_date}
                            </small>
                        </div>
                    </div>
                    {!props.peli.pedido && <button className="out-button" onClick={() => order()}>Alquilar</button>}
                    
                    
                </div>}



        </>


    )
}
export default connect((state) => ({
    peli: state.peli,
    credentials: state.credentials
}))(Pelis);
