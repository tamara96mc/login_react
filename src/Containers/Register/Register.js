
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './Register.css';


const Register = () => {

    const history = useNavigate();

    //Hooks
    const [msgError, setmsgError] = useState("");
    const [user, setUser] = useState(
        {
            name: '',
            surname: '',
            dni: '',
            email: '',
            address: '',
            city: '',
            cp: 0,
            password: '',
            password2: '',
            phone: ''
        });


    useEffect(() => {

    }, []);

    useEffect(() => {

    });

    const enviarDatosRegistro = async () => {

        // let body = {
        //     email: credentials.email,
        //     password: credentials.password
        // };

        // try {

        //     let res = await axios.post("https://api-tmc-pelis.herokuapp.com/api/signup", body);

        // } catch (error) {
        //     setmsgError("Error al logearme");
        //     console.log(error);

        // }
    };

    const userHander = (e) => {

        setUser({ ...user, [e.target.name]: e.target.value });
    }

    return (

        <div className="designRegister">
            <input type='text' name='name' title='name' onChange={userHander} placeholder="Nombre" lenght='30' />
            <input type='text' name='surname' title='name' onChange={userHander} placeholder="Apellido" lenght='30' />
            <input type='text' name='dni' title='dni' onChange={userHander} placeholder="dni" lenght='30' />
            <input type='text' name='email' title='email' onChange={userHander} placeholder="email" lenght='30' />
            <input type='password' name='address' title='address' onChange={userHander} placeholder="calle" lenght='30' />
            <input type='text' name='city' title='city' onChange={userHander} placeholder="ciudad" lenght='30' />
            <input type='text' name='cp' title='cp' onChange={userHander} placeholder="12345" lenght='30' />
            <input type='password' name='password' title='password' onChange={userHander} placeholder="password" lenght='30' />
            <input type='password' name='password2' title='password2' onChange={userHander} placeholder="password" lenght='30' />
            <input type='text' name='phone' title='phone' onChange={userHander} placeholder="phone" lenght='30' />   
            <div className="botonRegister" onClick={() => enviarDatosRegistro()}>Register</div>        
        </div>
    )
};

export default Register;