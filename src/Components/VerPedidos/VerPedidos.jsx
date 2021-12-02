

import React, { useState, useEffect, useMemo } from 'react';
import clienteAxios from '../../config/axios';
import { connect } from 'react-redux';
import Pagination from '../../Components/Pagination/Pagination';

const VerPedidos = (props) => {

    let PageSize = 1;

    const [currentPage, setCurrentPage] = useState(0);


    const [pedidosActivos, setPedidosActivos] = useState([]);

    useEffect(() => {
        traePeliculas("/pedido");
    }, []);

    useEffect(() => {
        console.log('datos admin', currentTableData);
    });

    const traePeliculas = async (endPoint) => {

        try {
            let token = props.credentials.token;
            //CREAMOS LA CONFIGURACIÓN DEL HEADER QUE SE VA A MANDAR
            let config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            let res = await clienteAxios.get(endPoint, config);

            setPedidosActivos(res.data);
            setCurrentPage(1);
            console.log('lenght' ,res.data.length);

        } catch (error) {
            console.log(error);
        }
    };

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return pedidosActivos.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);


    return (
        <>
            <h3>Administación de pedidos</h3>
            {currentTableData
            ?

                <div className="container">
                    <table className="table-responsive">
                        <thead>
                            <tr>
                                <th>Usuario</th>
                                <th>Pelicula</th>
                                <th>Precio</th>
                                <th>Fecha inicial</th>
                                <th>Fecha fin</th>
                            </tr>
                        </thead>
                        <tbody>

                            {currentTableData.map(pedido => {
                                return (
                                    <tr key={pedido._id}>
                                        <td>{pedido.cliente.name}</td>
                                        <td>{pedido.pelicula.title}</td>
                                        <td>{pedido.precio}</td>
                                        <td>{pedido.fechaAlquiler}</td>
                                        <td>{pedido.fechaDevolucion}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>

                    <Pagination
                        className="pagination-bar"
                        currentPage={currentPage}
                        totalCount={pedidosActivos.length}
                        pageSize={PageSize}
                        onPageChange={page => setCurrentPage(page)}
                    />
                </div>
                :
                <div className="img-load">
                    <p className="no-pedidos">No ha pedidos activos</p>
                </div>
            }
        </>
    )

};

export default connect((state) => ({
    credentials: state.credentials
}))(VerPedidos);