
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useForm from "../../functions/hooks/useFormRegister";
import { validateSignUp } from "../../functions/hooks/validateInput";


const DatosPerfil = () => {

    useEffect(() => {
        setValues(JSON.parse(localStorage.getItem("datosLogin")));
    }, [])

    const submit = async () => {

        try {
            let res = await axios.delete(`https://api-tmc-pelis.herokuapp.com/api/${values._id}`, values);
            localStorage.removeItem("datosLogin");
            setValues(null);

        } catch (error) {
            console.log(error)
        }
    };

    const { handleChange, handleSubmit, values, setValues, errors } = useForm(submit, validateSignUp);


    return (
        <div className="form">
            <h3>Perfil</h3>
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
            <div className="send-button" onClick={handleSubmit}>Actualizar</div>

        </div>
    )
};

export default DatosPerfil;
