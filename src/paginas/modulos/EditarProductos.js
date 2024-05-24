import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ContentHeader from "../../componentes/ContentHeader";
import Footer from "../../componentes/Footer";
import Navbar from "../../componentes/Navbar";
import SidebarContainer from "../../componentes/SidebarContainer";
import APIInvoke from "../../configuracion/APIInvoke";

const EditarProductos = () => {
    const [nombre_producto, setNombProd] = useState("");
    const [unidades, setUnidades] = useState("");
    const [precio_unitario, setPrecioUni] = useState("");
    const [precio_total, setPrecioTotal] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    const actualizarProdcutos = async (e) => {
        e.preventDefault();
        await APIInvoke.invokePUT(`/api/productos/${id}`, {
            nombre_producto: nombre_producto,
            unidades: unidades,
            precio_unitario: precio_unitario,
            precio_total: precio_total,
        });
        navigate("/productos");
    };

    useEffect(() => {
        getProdcutosID();
        // eslint-disable-next-line
    }, []);

    const getProdcutosID = async () => {
        const resultado = await APIInvoke.invokeGET(`/api/productos/${id}`);
        setNombProd(resultado.nombre_producto);
        setUnidades(resultado.unidades);
        setPrecioUni(resultado.precio_unitario);
        setPrecioTotal(resultado.precio_total);
    };

    return (
        <div className="wrapper">
            <Navbar></Navbar>
            <SidebarContainer></SidebarContainer>
            <div className="content-wrapper pb-2">
                <ContentHeader
                    titulo={"Editar productos"}
                    breadCrumb1={"Listado de productos"}
                    breadCrumb2={"Editar"}
                    ruta1={"/productos/editar"}
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
                            <form onSubmit={actualizarProdcutos}>
                            <div className="input-group-append">
                                    <div className="input-group-text">
                                        <i className="fa fa-gift"/>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="nombre_producto">Nombre Producto</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="nombre_producto"
                                            name="nombre_producto"
                                            placeholder="Ingrese los nombres del cliente"
                                            value={nombre_producto}
                                            onChange={(e) => setNombProd(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fa fa-check"/>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="unidades">Unidades</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="unidades"
                                            name="unidades"
                                            placeholder="Ingrese las unidades del producto"
                                            value={unidades}
                                            onChange={(e) => setUnidades(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fa fa-money-bill"/>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="precio_unitario">Precio unitario</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="precio_unitario"
                                            name="precio_unitario"
                                            placeholder="Ingrese su precio unitario"
                                            value={precio_unitario}
                                            onChange={(e) => setPrecioUni(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fa fa-money-bill"/>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="precio_total">Precio total</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="precio_total"
                                            name="precio_total"
                                            placeholder="Ingrese la dirección del cliente"
                                            value={precio_total}
                                            onChange={(e) => setPrecioTotal(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="card-footer bg-white ">
                                    <button type="submit" className="btn btn-info">
                                        Editar
                                    </button>
                                    <b>&nbsp;</b>&nbsp;
                                    <a href="/productos">
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

export default EditarProductos;