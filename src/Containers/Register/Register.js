
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import useForm from "../../functions/hooks/useFormRegister";
import { validateSignUp } from "../../functions/hooks/validateInput";

import './Register.css';


const Register = () => {

    const history = useNavigate();

    const submit = async () => {

        try {
            let res = await axios.post("https://api-tmc-pelis.herokuapp.com/api/signup", values);
            console.log("res", res);
            localStorage.setItem("datosLogin", JSON.stringify(res.data.user));
            history("/profile");

        } catch (error) {
            console.log(error)
        }
    };

    const { handleChange, handleSubmit, values, errors } = useForm(submit, validateSignUp);


    return (
        <div className="designRegister">

            <div className="campo">
            <h3 className="tituloLogin">Registro</h3>
            <label>Nombre</label>
                <input 
                    name="name"
                    placeholder="Nombre y apellidos"
                    value={values.name || ''}
                    onChange={handleChange}
                />
                {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <div className="campo">
            <label>Correo</label>
                <input 
                    name="email"
                    placeholder="correo"
                    value={values.email || ''}
                    onChange={handleChange}
                />
                {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="campo">
            <label>Contraseña</label>
                <input 
                    name="password"
                    placeholder="contraseña"
                    value={values.password || ''}
                    onChange={handleChange}
                />
                {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <div className="campo">
            <label>Rol</label>
                <input 
                    name="rol"
                    placeholder="admin/user"
                    value={values.rol || ''}
                    onChange={handleChange}
                />
                {errors.rol && <p className="error">{errors.rol}</p>}
            </div>
            <div className="sendButton" onClick={handleSubmit}>Registro</div>

        </div>
    )
};

export default Register;