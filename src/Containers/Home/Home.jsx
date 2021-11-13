   

import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import load from '../../img/load.gif';
import clienteAxios from '../../config/axios';
import { connect } from 'react-redux';
import { SELECT_PELI } from '../../redux/types';

const Home = (props) => {

    let navigate = useNavigate();

    const [peliculas, setPeliculas] = useState([]);


    useEffect(()=>{
            traePeliculas();
    },[]);


    const traePeliculas = async () => {

            try {
             
                let token = props.credentials.token;
                console.log('props' , props);
                //CREAMOS LA CONFIGURACIÓN DEL HEADER QUE SE VA A MANDAR
                let config = {
                    headers: { Authorization: `Bearer ${token}` }
                };    
            
            let res = await clienteAxios.get("/pelicula", config);
                
            setPeliculas(res.data);
                
            } catch (error) {
                console.log(error);
            }
         
    };

    const escogePelicula = (peliculaEscogida) => {
        
        props.dispatch({type:SELECT_PELI, payload:peliculaEscogida});
        //redirigire a el perfil de la película....
        navigate("/pelis");
    }

    if(peliculas[1]?.title){

        return (
            <div className="display-pelis">
                {
                    peliculas.map((peli) => {
                        return (
                            <div className="peli" key={peli.id} onClick={()=>escogePelicula(peli)}>
                                <img alt={peli.id} className="cartel" src={`https://image.tmdb.org/t/p/original/${peli.poster_path}`}/>
                                <p>{peli.title}</p>
                            </div>
                        )
                    })
                }

            </div>
        )

    } else {

        return (
            <div>
                 <img src={load} alt="" className="img-load" />
            </div>
        )
    }

    
}

export default connect((state)=>({
    credentials: state.credentials
}))(Home);