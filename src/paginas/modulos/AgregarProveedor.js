import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ContentHeader from '../../componentes/ContentHeader.js';
import Footer from '../../componentes/Footer.js';
import Navbar from '../../componentes/Navbar.js';
import SidebarContainer from '../../componentes/SidebarContainer.js';
import APIInvoke from '../../configuracion/APIInvoke.js';
import swal from 'sweetalert';

export const AgregarProveedor = () => {

    const navigate = useNavigate();

    const [proveedores, setProveedores] = useState({

        nombre: '',
        nit: '',
        correo: '',
        telefono: '',
        direccion: ''

    })

    const { nombre, nit, correo, telefono, direccion } = proveedores

    useEffect(() => {
        document.getElementById("nombre").focus();

    }, [])

    const onChange = (e) => {
        setProveedores({
            ...proveedores,
            [e.target.name]: e.target.value
        })
    }

    const CrearProveedor = async () => {

        const data = {
            nombre: proveedores.nombre,
            nit: proveedores.nit,
            correo: proveedores.correo,
            telefono: proveedores.telefono,
            direccion: proveedores.direccion
        }

        const response = await APIInvoke.invokePOST('/api/proveedores', data);
        const idProveedor = response._id

        if (idProveedor === '') {
            const msg = 'Hubo un error de agregar el proveedor'
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
        } else {
            navigate("/proveedores");
            const msg = 'El cliente fue agregado con éxito'
            swal({
                title: 'Información',
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
            setProveedores({
                nombre: '',
                nit: '',
                correo: '',
                telefono: '',
                direccion: ''
            });
        }
    }

    const onSubmit = (e) => {
        e.preventdefault();
        CrearProveedor();
    }

    return (
        <div className='wrapper'>
            <Navbar></Navbar>
            <SidebarContainer></SidebarContainer>
            <div className='content-wrapper'>
                <ContentHeader
                    titulo={"Agregar proveedores"}
                    breadCrumb1={"Listado de proveedores"}
                    breadCrumb2={"Agregar"}
                    ruta1={"/proveedores/agregar"}
                />
                <section className='content'>
                    <div className='card' />
                    <div className='card-header' />
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
                            <form onSubmit={onSubmit}>
                                <div className='card-body'>
                                    <div className='form-group'>
                                        <label htmlFor='nombre'>   Nombre   </label>
                                        <input type='text'
                                            className='form-control'
                                            id='nombre'
                                            name='nombre'
                                            placeholder='Ingresar nombre del proveedor'
                                            value={nombre}
                                            onChange={onChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='input-group-append'>
                                    <div className='nput-group-text'>
                                        <span className='fa fa-envelope' />
                                    </div>
                                </div>

                                <div className='card-body'>
                                    <div className='form-group'>
                                        <label htmlFor='nit'>   NIT del proveedor   </label>
                                        <input type='text'
                                            className='form-control'
                                            id='nit'
                                            name='nit'
                                            placeholder='Ingresar nit'
                                            value={nit}
                                            onChange={onChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='input-group-append'>
                                    <div className='nput-group-text'>
                                        <span className='fa fa-envelope' />
                                    </div>
                                </div>

                                <div className='card-body'>
                                    <div className='form-group'>
                                        <label htmlFor='correo'>   Correo electrónico  </label>
                                        <input type='text'
                                            className='form-control'
                                            id='correo'
                                            name='correo'
                                            placeholder='Ingresar corre electrónico'
                                            value={correo}
                                            onChange={onChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='input-group-append'>
                                    <div className='nput-group-text'>
                                        <span className='fa fa-envelope' />
                                    </div>
                                </div>

                                <div className='card-body'>
                                    <div className='form-group'>
                                        <label htmlFor='telefono'>   Teléfono  </label>
                                        <input type='number'
                                            className='form-control'
                                            id='telefono'
                                            name='telefono'
                                            placeholder='Ingresar número del teléfono'
                                            value={telefono}
                                            onChange={onChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='input-group-append'>
                                    <div className='nput-group-text'>
                                        <span className='fa fa-envelope' />
                                    </div>
                                </div>

                                <div className='card-body'>
                                    <div className='form-group'>
                                        <label htmlFor='Dirección'>   Dirección   </label>
                                        <input type='text'
                                            className='form-control'
                                            id='direccion'
                                            name='direccion'
                                            placeholder='Ingresar dirección'
                                            value={direccion}
                                            onChange={onChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='input-group-append'>
                                    <div className='nput-group-text'>
                                        <span className='fa fa-envelope' />
                                    </div>
                                </div>

                                <div className='card-footer'>
                                    <button type='submit' className='btn btn-primary'>   Agregar   </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default AgregarProveedor