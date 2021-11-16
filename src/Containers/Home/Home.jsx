import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import load from '../../img/Ellipsis-1.2s-217px.gif';
import clienteAxios from '../../config/axios';
import { connect } from 'react-redux';
import { SELECT_PELI, RESET_SEARCH } from '../../redux/types';

const Home = (props) => {

    let navigate = useNavigate();

    const [peliculas, setPeliculas] = useState([]);

    useEffect(() => {
        traePeliculas("/pelicula");
    }, []);

    useEffect(() => {
            traePeliculas(`/pelicula/${props.buscador.tipo}/${props.buscador.valor}`);
    }, [props.buscador])


    const traePeliculas = async (endPoint) => {

        try {
            let token = props.credentials.token;
            //CREAMOS LA CONFIGURACIÓN DEL HEADER QUE SE VA A MANDAR
            let config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            let res = await clienteAxios.get(endPoint, config);
            
            if(res.data.length>1){
                setPeliculas(res.data);
            }else{
                setPeliculas([res.data]);
            }

        } catch (error) {
            console.log(error);
        }
    };

    const escogePelicula = (peliculaEscogida) => {

        props.dispatch({ type: SELECT_PELI, payload: peliculaEscogida });
        //redirigire a el perfil de la película....
        navigate("/pelis");
    }

    const handleSubmit = () => {
        traePeliculas("/pelicula");
        props.dispatch({ type: RESET_SEARCH, payload: null });
        document.getElementById("input_buscador").value = "";
        
    };

    return (
        <>
        <div className="basics_row_space">
        <div className="espacio"></div>
        <h3>Las películas</h3>
        <button className="out-button" onClick={() => handleSubmit()}>Reset</button>
        </div>
            {peliculas[0]?.title 
                ?
                <div className="display-pelis"> 
                    {
                        peliculas.map((peli) => {
                            return (
                                <div className="peli" key={peli._id} onClick={() => escogePelicula(peli)}>
                                    <img alt={peli.id} className="cartel" src={`https://image.tmdb.org/t/p/original/${peli.poster_path}`} />
                                    <p>{peli.title}</p>
                                </div>
                            )
                        })
                    }

                </div>
                :
                <div className="img-load">
                    <img src={load} alt="" />
                </div>
            }
        </>

    )
}

export default connect((state) => ({
    credentials: state.credentials,
    buscador: state.buscador
}))(Home);