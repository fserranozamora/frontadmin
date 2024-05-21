import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ContentHeader from "../../componentes/ContentHeader";
import Footer from "../../componentes/Footer";
import Navbar from "../../componentes/Navbar";
import SidebarContainer from "../../componentes/SidebarContainer";
import APIInvoke from "../../configuracion/APIInvoke";
import swal from "sweetalert";

const MostrarProductos = () => {

    const [productos, setProductos] = useState([]);

    const getProductos = async () => {
        const response = await APIInvoke.invokeGET('/api/productos/');
        setProductos(response.productos);
    }

    useEffect(() => {
        getProductos();
    }, [])

    const eliminarProducto = async (e, idProducto) => {
        e.preventDefault();
        const response = await APIInvoke.invokeDELETE(`/api/productos/${idProducto}`);

        if (response.msg === "El producto fue eliminado con éxito") {
            const msg = "El producto fue eliminado correctamente";
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
            getProductos();

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
                    title={"Listado de productos"}
                    breadCrumb1={"Inicio"}
                    breadCrumb2={"Productos"}
                    route1={"/home"}>
                </ContentHeader>

                <section className="content">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">
                                <Link to={"/productos/agregar"}
                                    className="btn btn-block btn-primary btn-sm"> Agregar productos  <i className="fa fa-solid fa-user-plus"></i>
                                </Link>
                            </h3>

                            <div className="card-tools">

                                <button type="button" className="btn btn-tool"
                                    data-card-widget="remove" title="Remove">
                                    <i className="fas fa-solid fa-plus" />
                                </button>

                                <button type="button" className="btn btn-tool"
                                    data-card-widget="collapse" title="Collapse">
                                    <i className="fas fa-solid fa-minus" />
                                </button>

                            </div>
                        </div>

                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th style={{ width: "25%" }}>Nombre</th>
                                        <th style={{ width: "15%" }}>Unidades</th>
                                        <th style={{ width: "15%" }}>Precio unitario</th>
                                        <th style={{ width: "15%" }}>Precio total</th>
                                        <th style={{ width: "15%" }}>Acciones</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {productos && productos.map((Producto, index) => (
                                        <tr key={index}>
                                            <td>{Producto.nombre_producto}</td>
                                            <td>{Producto.unidades}</td>
                                            <td>{Producto.precio_unitario}</td>
                                            <td>{Producto.precio_total}</td>
                                            <td>

                                                <Link to={`/clientes/editar/${Producto._id}`}
                                                    className="btn btn-sm btn-primary">
                                                    <i className="fa-solid fa-user-pen"></i>
                                                </Link>

                                                <button onClick={(e) => eliminarProducto(e, Producto._id)}
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

export default MostrarProductos