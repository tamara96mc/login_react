
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import useForm from "../../functions/hooks/useFormRegister";
import { validateSignUp } from "../../functions/hooks/validateInput";


const Register = () => {

    const history = useNavigate();
    const [msgError, setmsgError] = useState("");

    const submit = async () => {

        try {
            let res = await axios.post("https://api-tmc-pelis.herokuapp.com/api/signup", values);
            console.log("res", res);
            localStorage.setItem("datosLogin", JSON.stringify(res.data.user));

            setmsgError("Usuario registrado con éxito.");
            setTimeout(() => {
                history("/profile");
            }, 4000);

        } catch (error) {
            console.log(error)
            setmsgError("Error al registrar el usuario.");
        }
    };

    const { handleChange, handleSubmit, values, errors } = useForm(submit, validateSignUp);


    return (
        <div className="form">
            <h3>Registro</h3>
            <div className="form-group">

                <input
                    name="name"
                    type="text"
                    placeholder="Nombre y apellidos"
                    value={values.name || ''}
                    onChange={handleChange}
                />
                {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <div className="form-group">
                <input
                    name="email"
                    type="email"
                    placeholder="correo"
                    value={values.email || ''}
                    onChange={handleChange}
                />
                {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="form-group">
                <input
                    name="password"
                    type="password"
                    placeholder="contraseña"
                    value={values.password || ''}
                    onChange={handleChange}
                />
                {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <div className="send-button" onClick={handleSubmit}>Registrar</div>

        </div>
    )
};

export default Register;