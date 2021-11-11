
import React, { useState, Fragment } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useForm from "../../functions/hooks/useFormLogin.js";
import { validateLogin } from "../../functions/hooks/validateInput";
import { LOGIN } from '../../redux/types';
import clienteAxios from '../../config/axios';
import tokenAuth from '../../config/token';
import { connect } from 'react-redux';

const Login = (props) => {

    const history = useNavigate();
    const submit = async () => {

        try {
            let res = await clienteAxios.post("/api/signin", values);
            console.log('datos' ,res.data);
            localStorage.setItem("token", JSON.stringify(res.data.token));
            props.dispatch({type:LOGIN, payload:res.data});
            history("/");
     
        } catch (error) {
            console.log(error);
        }
    }

    const { handleChange, handleSubmit, values, errors } = useForm(submit, validateLogin);    



    return (

        <div className="form">

            <h3>Iniciar sesión</h3>

            <div className="form-group">
                <input
                    className={`${errors.email && "inputError"}`}
                    name="email"
                    type="email"
                    placeholder="email"
                    value={values.email}
                    onChange={handleChange}
                />
                {errors.email && <p className="error">{errors.email}</p>}
            </div>

            <div className="form-group">
                <input
                    className={`${errors.password && "inputError"}`}
                    name="password"
                    type="password"
                    placeholder="password"
                    value={values.password}
                    onChange={handleChange}
                />
                {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <div className="send-button" onClick={handleSubmit}>Login</div>

        </div>
    );

}

export default connect()(Login);