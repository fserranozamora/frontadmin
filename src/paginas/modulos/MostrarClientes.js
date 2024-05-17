import React,{ useState, useEffect } from 'react'; 
import { Link } from "react-router-dom";
import ContentHeader from '../../componentes/ContentHeader';
import Footer from '../../componentes/Footer';
import Navbar from '../../componentes/Navbar';
import SidebarContainer from '../../componentes/SidebarContainer';
import APIInvoke from "../../configuracion/APIInvoke";
import swal from "sweetalert";

const MostrarClientes = () => {
    const [clientes, setClientes] = useState([]);

    const getClientes = async () => {
        const response = await APIInvoke.invokeGET('/api/clientes/');
        setClientes(response.clientes);
    }

    useEffect(() => {
        getClientes();
        // eslint-disable-next-line
    }, [])

    const deleteClientes = async (e, idCliente) => {
        e.preventDefault();
        const response = await APIInvoke.invokeDELETE(`/api/clientes/${idCliente}`);

        if (response.msg === "El cliente fue eliminado") {
            const msg = "El cliente fue eliminado correctamente";
            swal({
                title: 'Information',
                text: msg,
                icon: 'success',
                buttons: {
                    confirm: {
                        text: 'OK',
                        value: true,
                        visible: true,
                        className: "btn btn-primary",
                        closeModal: true
                    }
                }
            });
            getClientes();

        } else {
            const msg = "El cliente no fue eliminado correctamente";
            swal({
                title: "Error",
                text: msg,
                icon: "error",
                buttons: {
                    confirm: {
                        text: "OK",
                        value: true,
                        visible: true,
                        className: "btn btn-danger",
                        closeModal: true
                    }
                }

            })

        }
    }
    return (
        <div className="wrapper">
            <Navbar></Navbar>
            <SidebarContainer></SidebarContainer>
            <div className="content-wrapper">

                <ContentHeader
                    title={"Listado de clientes"}
                    breadCrumb1={"Inicio"}
                    breadCrumb2={"Clientes"}
                    route1={"/home"}>
                </ContentHeader>

                <section className="content">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">
                                <Link to={"/clientes/agregar"}
                                    className="btn btn-block btn-primary btn-sm">  Agregar clientes  <i className="fa fa-solid fa-user-plus"></i>
                                </Link>
                            </h3>

                            <div className="card-tools">

                                <button type="button" className="btn btn-tool"
                                    data-card-widget="remove" title="Remove">
                                    <i className="fas fa-items" />
                                </button>

                                <button type="button" className="btn btn-tool"
                                    data-card-widget="collapse" title="Collapse">
                                    <i className="fas fa-times" />
                                </button>

                            </div>
                        </div>

                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th style={{ width: "15%" }}>Nombres</th>
                                        <th style={{ width: "15%" }}>Apellidos</th>
                                        <th style={{ width: "10%" }}>Documento</th>
                                        <th style={{ width: "15%" }}>Correo</th>
                                        <th style={{ width: "15%" }}>Teléfono</th>
                                        <th style={{ width: "20%" }}>Dirección</th>
                                        <th style={{ width: "10%" }}>Acciones</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {clientes.map((cliente, index) => (
                                        <tr key={index}>
                                            <td>{cliente.nombre}</td>
                                            <td>{cliente.apellido}</td>
                                            <td>{cliente.documento}</td>
                                            <td>{cliente.email}</td>
                                            <td>{cliente.telefono}</td>
                                            <td>{cliente.direccion}</td>

                                            <td>

                                                <Link to={`/clientes/editar/${cliente._id}`}
                                                    className="btn btn-sm btn-primary">
                                                    <i className="fa-solid fa-user-pen"></i>
                                                </Link>

                                                <button onClick={(e) => deleteClientes(e, cliente._id)}
                                                    className="btn btn-danger">
                                                    <i className="fa-solid fa-trash-can"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                        </div>
                    </div>
                </section>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default MostrarClientes