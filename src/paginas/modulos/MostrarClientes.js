import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ContentHeader from "../../componentes/ContentHeader";
import Footer from "../../componentes/Footer";
import Navbar from "../../componentes/Navbar";
import SidebarContainer from "../../componentes/SidebarContainer";
import APIInvoke from "../../configuracion/APIInvoke";
import swal from "sweetalert";


export const MostrarClientes = () => {

    const [clientes, setClientes] = useState([])

    const getClientes = async () => {

        const response = await APIInvoke.invokeGET('/api/clientes');
        setClientes(response.clientes);

    }

    useEffect(() => {
        getClientes();

    }, [])

    const eliminarClientes = async (e, idCliente) => {
        e.preventDefault();
        const response = await APIInvoke.invokeDELETE(`/api/clientes/${idCliente}`);

        if (response.msg === 'El cliente fue eliminado') {
            const msg = "El cliente fue eliminado correctamente";
            swal({
                title: 'Informacion',
                text: msg,
                icon: 'success',
                buttons: {
                    confirm: {
                        text: 'OK',
                        value: true,
                        visible: true,
                        className: 'btn btn-primary',
                        closeModal: true
                    }
                }

            });

            getClientes();


        } else {

            const msg = "El cliente no fue eliminado correctamente";
            swal({
                title: 'Error',
                text: msg,
                icon: 'error',
                buttons: {
                    confirm: {
                        text: 'OK',
                        value: true,
                        visible: true,
                        className: 'btn btn-danger',
                        closeModal: true
                    }
                }

            });

        }
    }


    return (
        <div className="wrapper">
            <Navbar></Navbar>
            <SidebarContainer></SidebarContainer>

            <div className="content-wrapper">

                <ContentHeader
                    titulo={"Listado de Clientes"}
                    breadCrumb1={"Inicio"}
                    breadCrumb2={"Clientes"}
                    ruta1={"/home"}
                />

                <seccion className="content">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title"><Link to={"/clientes/agregar"}
                                className="btn btn-block btn-primary btn-sm"> Agregar Clientes <i className="fa fa-user-plus"> </i></Link></h3>
                            <div className="card-tools">

                                <button type="button" className="btn btn-tool" data-card-widget="collapse"
                                    title="collapse">
                                    <i className="fas fa-item" />
                                </button>


                                <button type="button" className="btn btn-tool" data-card-widget="remove"
                                    title="Remove">
                                    <i className="fas fa-item" />
                                </button>
                            </div>
                        </div>

                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th style={{ width: '15%' }}>Nombre Clientes</th>
                                        <th style={{ width: '15%' }}>Apellidos</th>
                                        <th style={{ width: '15%' }}>Cedula</th>
                                        <th style={{ width: '20%' }}>Correo</th>
                                        <th style={{ width: '10%' }}>Telefono</th>
                                        <th style={{ width: '15%' }}>Direccion</th>
                                        <th style={{ width: '10%' }}>Acciones</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {clientes.map((cliente, index) => (
                                        <tr key={index}>
                                            <td>{cliente.nombres}</td>
                                            <td>{cliente.apellidos}</td>
                                            <td>{cliente.cedula}</td>
                                            <td>{cliente.correo}</td>
                                            <td>{cliente.telefono}</td>
                                            <td>{cliente.direccion}</td>
                                            <td>
                                                <Link to={`/clientes/editar/${cliente._id}`} className='btn btn-sm btn btn-primary'> Editar </Link>
                                                <p></p>
                                                <button onClick={(e) => eliminarClientes(e, cliente._id)} className='btn btn-sm btn btn-danger'> Eliminar </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </seccion>
            </div>
            <Footer></Footer>
        </div>
    )
}




export default MostrarClientes
