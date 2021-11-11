   

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import load from '../../img/load.gif'

const Home = () => {

    let navigate = useNavigate();

    const [peliculas, setPeliculas] = useState([]);


    useEffect(()=>{
     
            traePeliculas();

    },[]);

    useEffect(()=>{
        
    });

    const traePeliculas = async () => {

            try {
            
            let res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=51c1099989a6923f3d12154210fc2cf7&language=en-US&page=1");
        
            setPeliculas(res.data.results);
                
            } catch (error) {
                
            }
         
    };

    const escogePelicula = (peliculaEscogida) => {
        localStorage.setItem("choosenFilm", JSON.stringify(peliculaEscogida));

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
                                <p>{peli.original_title}</p>
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

export default Home;