
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import DatosPerfil from '../../Components/DatosPerfil/DatosPerfil';
import PedidosUser from '../../Components/PedidosUser/PedidosUser';


const Profile = (props) => {




    return (
     <div className="basics_column">
         <DatosPerfil/>
         <hr/>
         <PedidosUser/>
     </div>

      
    );

}

export default connect((state)=>({
    credentials: state.credentials
}))(Profile);
 