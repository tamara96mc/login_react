
import React, { useState, useEffect } from 'react';

import './Profile.css';

const Profile = () => {

    //Hook 
    const [datosPerfil, setDatosPerfil] = useState();

    useEffect(() => {
        console.log(datosPerfil)
        setDatosPerfil(JSON.parse(localStorage.getItem("datosLogin")));
    }, [])

    if (datosPerfil) {
        return (
            <div className="designProfile">
            {datosPerfil.email}
            <br/>
            {datosPerfil.name}
            <br/>
            {datosPerfil.rol}
            </div>
        )
    }
    return (
        <div className="designProfile">
        
        </div>
    )
};

export default Profile;