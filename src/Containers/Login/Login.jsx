
import React, { useState, Fragment } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useForm from "../../functions/hooks/useFormLogin.js";
import {validateLogin} from "../../functions/hooks/validateInput";
import './Login.css';

const Login = () => {

    const history = useNavigate();
    const submit = async () => {

        try {
            let res = await axios.post("https://api-tmc-pelis.herokuapp.com/api/signin", values);
            console.log("res", res.data.user);
            localStorage.setItem("datosLogin", JSON.stringify(res.data.user));

            setTimeout(() => {
                history("/profile");
            }, 4000);
        } catch (error) {
            console.log(error);
        }
    }

    const { handleChange, handleSubmit, values, errors } = useForm(submit, validateLogin);    



    return (

        <div className="designLogin">

            <h3 className="tituloLogin">Iniciar sesión</h3>

            <div className="formLogin">
                <label>Correo electrónico</label>
                <input
                    className={`${errors.email && "inputError"}`}
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                />
                {errors.email && <p className="error">{errors.email}</p>}
            </div>

            <div className="form-group">
                <label>Contraseña</label>
                <input
                    className={`${errors.password && "inputError"}`}
                    name="password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                />
                {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <div className="sendButton" onClick={handleSubmit}>Login</div>

        </div>
    );

}

export default Login;