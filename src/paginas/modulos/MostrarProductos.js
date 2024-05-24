import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ContentHeader from "../../componentes/ContentHeader";
import Footer from "../../componentes/Footer";
import Navbar from "../../componentes/Navbar";
import SidebarContainer from "../../componentes/SidebarContainer";
import APIInvoke from "../../configuracion/APIInvoke";
import swal from "sweetalert";


export const MostrarProductos = () => {

    const [productos, setProductos] = useState([])

    const getProductos = async () => {

        const response = await APIInvoke.invokeGET('/api/productos');
        setProductos(response.productos);

    }

    useEffect(() => {
        getProductos();

    }, [])

    const eliminarProductos = async (e, idProducto) => {
        e.preventDefault();
        const response = await APIInvoke.invokeDELETE(`/api/producto/${idProducto}`);

        if (response.msg === 'El producto fue eliminado') {
            const msg = "El producto fue eliminado correctamente";
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

            getProductos();


        } else {

            const msg = "El producto no fue eliminado correctamente";
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
                    titulo={"Listado de Productos"}
                    breadCrumb1={"Inicio"}
                    breadCrumb2={"Productos"}
                    ruta1={"/home"}
                />

                <seccion className="content">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title"><Link to={"/productos/agregar"}
                                className="btn btn-block btn-primary btn-sm"> Agregar Productos <i className="fa fa-user-plus"> </i></Link></h3>
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
                                        <th style={{ width: '50%' }}>Nombre Producto</th>
                                        <th style={{ width: '10%' }}>Unidades</th>
                                        <th style={{ width: '15%' }}>Precio unitario</th>
                                        <th style={{ width: '15%' }}>Precio total</th>
                                        <th style={{ width: '10%' }}>Acciones</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {productos.map((producto, index) => (
                                        <tr key={index}>
                                            <td>{producto.nombre_producto}</td>
                                            <td>{producto.unidades}</td>
                                            <td>{producto.precio_unitario}</td>
                                            <td>{producto.precio_total}</td>
                                            <td>
                                                <Link to={`/productos/editar/${producto.id}`} className='btn btn-sm btn btn-primary'> Editar </Link>
                                                <button onClick={(e) => eliminarProductos(e, producto._id)} className='btn btn-sm btn btn-danger'>Eliminar</button>
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




export default MostrarProductos