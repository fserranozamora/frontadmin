import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ContentHeader from '../../componentes/ContentHeader.js';
import Footer from '../../componentes/Footer.js';
import Navbar from '../../componentes/Navbar.js';
import SidebarContainer from '../../componentes/SidebarContainer.js';
import APIInvoke from '../../configuracion/APIInvoke.js';
import swal from 'sweetalert';

export const MostrarProveedores = () => {

    const [proveedores, setProveedores] = useState([])

    const getProveedores = async () => {

        const response = await APIInvoke.invokeGET('/api/clientes');
        setProveedores(response.proveedores);

    }

    useEffect(() => {
        getProveedores();
    }, [])

    const eliminarProveedores = async (e, idProveedores) => {
        e.preventdefault();
        const response = await APIInvoke.invokeDELETE(`/api/proveedores/${idProveedores}`);
        if (response.msg === "El proveedor fue eliminado") {
            const msg = "El proveedor fue eliminado correctamente";
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
            getProveedores();
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
        <div className='wrapper'>
            <Navbar></Navbar>
            <SidebarContainer></SidebarContainer>
            <div className='content-wrapper'>
                <ContentHeader
                    titulo={"Listado de proveedores"}
                    breadCrumb1={"Inicio"}
                    breadCrumb2={"Proveedores"}
                    ruta1={"/home"}
                />
                <section className='content'>
                    <div className='card' />
                    <div className='card-header' />
                    <h3 className='card-title'><Link to={'/proveedores/agregar'}
                        className='btn btn-block, btn-primary, btn-sm'>   Agregar Proveedores  </Link></h3>
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
                                        <th style={{ width: '15%' }}>Nombres</th>
                                        <th style={{ width: '15%' }}>Apellidos</th>
                                        <th style={{ width: '15%' }}>Cedula</th>
                                        <th style={{ width: '20%' }}>Correo</th>
                                        <th style={{ width: '10%' }}>Teléfono</th>
                                        <th style={{ width: '15%' }}>Dirección</th>
                                        <th style={{ width: '10%' }}>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {proveedores.map((proveedor, index) => (
                                        <tr key={index}>
                                            <td> {proveedor.nombre}</td>
                                            <td> {proveedor.nit}</td>
                                            <td> {proveedor.correo}</td>
                                            <td> {proveedor.telefono}</td>
                                            <td> {proveedor.direccion}</td>
                                            <td>
                                                <Link to={`/proveedores/editar/${proveedor._id}`} className='btn btn-sm btn-primary' > Editar </Link>
                                                <button onClick={(e) => eliminarProveedores(e, proveedor._id)} className='btn btn-sm btn-danger'>
                                                    Borrar</button>
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

export default MostrarProveedores;