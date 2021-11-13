import React, { useState, useEffect } from 'react';
import clienteAxios from '../../config/axios';
import { connect } from 'react-redux';
import { ORDER_PELI } from '../../redux/types';

const Pelis = (props) => {

    const [peli, setPeli] = useState();
    const [fechas, setFechas] = useState();
    const [cambiarForm, setCambiarForm] = useState(false);


    const TODAY = new Date(Date.now());
    const FECHA_INICIAL = TODAY.toLocaleDateString();

    useEffect(() => {
        setPeli(props.peli.select_peli);
    }, []);

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
            peliculaId: props.peli._id,
            precio: 23,
            clienteId: props.credentials.user._id
        };

        try {

            let token = props.credentials.token;
            console.log('props en pelis', token);
            //CREAMOS LA CONFIGURACIÓN DEL HEADER QUE SE VA A MANDAR
            let config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            let res = await clienteAxios.post("/pedido", pedido, config);
            //console.log('datos', res.data);
            props.dispatch({ type: ORDER_PELI, payload: pedido });
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
                            placeholder="Fecha inicio"
                            value={FECHA_INICIAL}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            name="fecha_fin"
                            type="date"
                            placeholder="correo"
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
                    <button className="out-button" onClick={() => order()}>Alquilar</button>

                </div>}



        </>


    )
}
export default connect((state) => ({
    peli: state.peli,
    credentials: state.credentials
}))(Pelis);
