
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './Login.css';


const Login = () => {

    const history = useNavigate();

    //Hooks
    const [msgError, setmsgError] = useState("");
    const [credentials, setCredentials] = useState({ email: '', password: '' });

    //Handler o manejador
    const manejadorInputs = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    const logeame = async () => {

        let body = {
            email: credentials.email,
            password: credentials.password
        };

        try {

            let res = await axios.post("https://api-tmc-pelis.herokuapp.com/api/signin", body);
            setmsgError(`Hola de nuevo ${res.data.user}....`);
            console.log("res" , res.data.user);
            localStorage.setItem("datosLogin", JSON.stringify(res.data.user.email));

            setTimeout(() => {
                history("/profile");
            }, 4000);
        } catch (error) {
            setmsgError("Error al logearme");

        }

    }


    return (

        <div className="designLogin">
            {/*<pre>{JSON.stringify(credentials, null,2)}</pre>*/}
            <input type='email' name='email' title='correo' onChange={manejadorInputs} lenght='30' />
            <input type='password' name='password' title='clave' onChange={manejadorInputs} lenght='30' />
            <div className="sendButton" onClick={() => logeame()}>Login</div>
            <div className="error">{msgError}</div>
        </div>
    )
};

export default Login;