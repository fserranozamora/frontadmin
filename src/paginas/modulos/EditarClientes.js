import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ContentHeader from "../../componentes/ContentHeader";
import Footer from "../../componentes/Footer";
import Navbar from "../../componentes/Navbar";
import SidebarContainer from "../../componentes/SidebarContainer";
import APIInvoke from "../../configuracion/APIInvoke";

const EditarClientes = () => {
    const [nombres, setNombres] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [cedula, setCedula] = useState("");
    const [correo, setCorreo] = useState("");
    const [telefono, setTelefono] = useState("");
    const [direccion, setDireccion] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    const actualizarClientes = async (e) => {
        e.preventDefault();
        await APIInvoke.invokePUT(`/api/clientes/${id}`, {
            nombres: nombres,
            apellidos: apellidos, // corregido de apellido a apellidos
            cedula: cedula,
            correo: correo,
            telefono: telefono,
            direccion: direccion,
        });
        navigate("/clientes");
    };

    useEffect(() => {
        getClientesID();
        // eslint-disable-next-line
    }, []);

    const getClientesID = async () => {
        const resultado = await APIInvoke.invokeGET(`/api/clientes/${id}`); // Cambiado a invokeGET
        setNombres(resultado.nombres);
        setApellidos(resultado.apellidos); // corregido de apellido a apellidos
        setCedula(resultado.cedula);
        setCorreo(resultado.correo);
        setTelefono(resultado.telefono);
        setDireccion(resultado.direccion);
    };

    return (
        <div className="wrapper">
            <Navbar></Navbar>
            <SidebarContainer></SidebarContainer>
            <div className="content-wrapper pb-2">
                <ContentHeader
                    titulo={"Editar clientes"}
                    breadCrumb1={"Listado de clientes"}
                    breadCrumb2={"Editar"}
                    ruta1={"/clientes/editar"}
                />
                <section className="container">
                    <div className="card">
                        <div className="card-header">
                            <div className="card-tools">
                                <button
                                    type="button"
                                    className="btn btn-tool"
                                    data-card-widget="collapse"
                                    title="Collapse"
                                >
                                    <i className="fas fa-times"></i>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-tool"
                                    data-card-widget="remove"
                                    title="Remove"
                                >
                                    <i className="fas fa-items"></i>
                                </button>
                            </div>
                        </div>

                        <div className="card-body">
                            <form onSubmit={actualizarClientes}>
                            <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fa fa-user"/>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="nombres">Nombres Cliente</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="nombres"
                                            name="nombres"
                                            placeholder="Ingrese los nombres del cliente"
                                            value={nombres}
                                            onChange={(e) => setNombres(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="apellidos">Apellidos</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="apellidos"
                                            name="apellidos"
                                            placeholder="Ingrese los apellidos del cliente"
                                            value={apellidos}
                                            onChange={(e) => setApellidos(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fa fa-address-card"/>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="cedula">Cédula de ciudadanía</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="cedula"
                                            name="cedula"
                                            placeholder="Ingrese la cédula de ciudadanía"
                                            value={cedula}
                                            onChange={(e) => setCedula(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fa fa-envelope"/>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="correo">Correo</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="correo"
                                            name="correo"
                                            placeholder="Ingrese el correo del cliente"
                                            value={correo}
                                            onChange={(e) => setCorreo(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fa fa-phone"/>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="telefono">Teléfono</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="telefono"
                                            name="telefono"
                                            placeholder="Ingrese el teléfono del cliente"
                                            value={telefono}
                                            onChange={(e) => setTelefono(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fa fa-home"/>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="direccion">Dirección</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="direccion"
                                            name="direccion"
                                            placeholder="Ingrese la dirección del cliente"
                                            value={direccion}
                                            onChange={(e) => setDireccion(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="card-footer bg-white ">
                                    <button type="submit" className="btn btn-info">
                                        Guardar
                                    </button>
                                    <b>&nbsp;</b>&nbsp;
                                    <a href="/clientes">
                                        <button type="button" className="btn btn-danger">
                                            Cancelar
                                        </button>
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default EditarClientes;
