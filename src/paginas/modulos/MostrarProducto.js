import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ContentHeader from '../../componentes/ContentHeader.js';
import Footer from '../../componentes/Footer.js';
import Navbar from '../../componentes/Navbar.js';
import SidebarContainer from '../../componentes/SidebarContainer.js';
import APIInvoke from '../../configuracion/APIInvoke.js';
import swal from 'sweetalert';

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
        e.preventdefault();
        const response = await APIInvoke.invokeDELETE(`/api/productos/${idProducto}`);
        if (response.msg === "El producto fue eliminado") {
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
        <div className='wrapper'>
            <Navbar></Navbar>
            <SidebarContainer></SidebarContainer>
            <div className='content-wrapper'>
                <ContentHeader
                    titulo={"Listado de productos"}
                    breadCrumb1={"Inicio"}
                    breadCrumb2={"Productos"}
                    ruta1={"/home"}
                />
                <section className='content'>
                    <div className='card' />
                    <div className='card-header' />
                    <h3 className='card-title'><Link to={'/productos/agregar'}
                        className='btn btn-block, btn-primary, btn-sm'>   Agregar Productos  </Link></h3>
                    <div className='card-tools'>
                        <button type='button' className='btn btn-tool' data-card-widget='collapse'
                            title='Collapse'>
                            <i className='fa fa-items'></i>
                        </button>
                        <button type='button' className='btn btn-tool' data-card-widget='remove'
                            title='Remove'>
                            <i className='fa fa-items'></i>
                        </button>
                        <div className='card-body'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th style={{ width: '15%' }}>Nombre</th>
                                        <th style={{ width: '15%' }}>Unidades</th>
                                        <th style={{ width: '15%' }}>Precio unitario</th>
                                        <th style={{ width: '20%' }}>Precio total</th>
                                        <th style={{ width: '10%' }}>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {productos.map((producto, index) => (
                                        <tr key={index}>
                                            <td>{producto.nombre}</td>
                                            <td>{producto.unidades}</td>
                                            <td>{producto.precio_unitario}</td>
                                            <td>{producto.precio_total}</td>
                                            <td>
                                                <Link to={`/productos/editar/${producto._id}`} className='btn btn-sm btn-primary'>   Editar   </Link>
                                                <button onClick={(e) => eliminarProductos (e, producto._id)} className='btn btn-sm btn-danger'>   Borrar   </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default MostrarProductos;