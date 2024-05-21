import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ContentHeader from '../../componentes/ContentHeader.js';
import Footer from '../../componentes/Footer.js';
import Navbar from '../../componentes/Navbar.js';
import SidebarContainer from '../../componentes/SidebarContainer.js';
import APIInvoke from '../../configuracion/APIInvoke.js';
import swal from 'sweetalert';

export const AgregarClientes = () => {

    const navigate = useNavigate();

    const [clientes, setClientes] = useState({

        nombre: '',
        apellido: '',
        documento: '',
        email: '',
        telefono: '',
        direccion: ''

    })

    const { nombre, apellido, documento, email, telefono, direccion } = clientes

    useEffect(() => {
        document.getElementById("nombre").focus();

    }, [])

    const onChange = (e) => {
        setClientes({
            ...clientes,
            [e.target.name]: e.target.value
        })
    }

    const CrearCliente = async () => {

        const data = {
            nombre: clientes.nombre,
            apellido: clientes.apellids,
            documento: clientes.documento,
            email: clientes.email,
            telefono: clientes.telefono,
            direccion: clientes.direccion
        }

        const response = await APIInvoke.invokePOST('/api/clientes', data);
        const idCliente = response._id

        if (idCliente === '') {
            const msg = 'Hubo un error de agregar el cliente'
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
            navigate("/clientes");
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
            setClientes({
                nombre: '',
                apellido: '',
                documento: '',
                email: '',
                telefono: '',
                direccion: ''
            });
        }
    }

    const onSubmit = (e) => {
        e.preventdefault();
        CrearCliente();
    }

    return (
        <div className='wrapper'>
            <Navbar></Navbar>
            <SidebarContainer></SidebarContainer>
            <div className='content-wrapper'>
                <ContentHeader
                    titulo={"Agregar clientes"}
                    breadCrumb1={"Listado de clientes"}
                    breadCrumb2={"Agregar"}
                    ruta1={"/clientes/agregar"}
                />
                <section className='content'>
                    <div className='card' />
                    <div className='card-header' />
                    <div className='card-tools'>
                        <button type='button' className='btn btn-tool' data-card-widget='collapse'
                            title='Collapse'>
                            <i className='fa fa-solid fa-plus'></i>
                        </button>
                        <button type='button' className='btn btn-tool' data-card-widget='remove'
                            title='Remove'>
                            <i className='fa fla -solid fa-minus'></i>
                        </button>
                        <div className='card-body'>
                            <form onSubmit={onSubmit}>
                                <div className='card-body'>
                                    <div className='form-group'>
                                        <label htmlFor='nombre'>   Nombres   </label>
                                        <input type='text'
                                            className='form-control'
                                            id='nombre'
                                            name='nombre'
                                            placeholder='Ingresar los nombres del cliente'
                                            value={nombre}
                                            onChange={onChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='input-group-append'>
                                    <div className='nput-group-text'>
                                        <i className='fa fa-items' />
                                    </div>
                                </div>

                                <div className='card-body'>
                                    <div className='form-group'>
                                        <label htmlFor='apellido'>   Apellidos   </label>
                                        <input type='text'
                                            className='form-control'
                                            id='apellido'
                                            name='apellido'
                                            placeholder='Ingresar apellidos'
                                            value={apellido}
                                            onChange={onChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='input-group-append'>
                                    <div className='nput-group-text'>
                                        <span className='fa fa-address-card' />
                                    </div>
                                </div>

                                <div className='card-body'>
                                    <div className='form-group'>
                                        <label htmlFor='documento'>   Cédula de ciudadanía   </label>
                                        <input type='number'
                                            className='form-control'
                                            id='documento'
                                            name='documento'
                                            placeholder='Ingresar cédula de ciudadanía'
                                            value={documento}
                                            onChange={onChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='input-group-append'>
                                    <div className='nput-group-text'>
                                        <span className='fa fa-solid fa-envelope' />
                                    </div>
                                </div>

                                <div className='card-body'>
                                    <div className='form-group'>
                                        <label htmlFor='email'>   Correo electrónico  </label>
                                        <input type='text'
                                            className='form-control'
                                            id='email'
                                            name='email'
                                            placeholder='Ingresar correo electrónico'
                                            value={email}
                                            onChange={onChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='input-group-append'>
                                    <div className='input-group-text'>
                                        <span className='fa fa-solid fa-phone' />
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
                                    <div className='input-group-text'>
                                    <span className='fa fa-solid fa-house' />
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
                                    <div className='input-group-text'>
                                        <span className='fa fa-solid fa-house' />
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

export default AgregarClientes