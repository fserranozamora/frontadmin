import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ContentHeader from '../../componentes/ContentHeader.js';
import Footer from '../../componentes/Footer.js';
import Navbar from '../../componentes/Navbar.js';
import SidebarContainer from '../../componentes/SidebarContainer.js';
import APIInvoke from '../../configuracion/APIInvoke.js';
import swal from 'sweetalert';

export const AgregarProducto = () => {

    const navigate = useNavigate();

    const [productos, setProductos] = useState({

        nombre: '',
        unidades: '',
        precio_unitario: '',
        precio_total: '',

    })

    const { nombre, unidades, precio_unitario, precio_total } = productos

    useEffect(() => {
        document.getElementById("nombre").focus();

    }, [])

    const onChange = (e) => {
        setProductos({
            ...productos,
            [e.target.name]: e.target.value
        })
    }

    const CrearProducto = async () => {

        const data = {
            nombre: productos.nombre,
            unidades: productos.unidades,
            precio_unitario: productos.precio_unitario,
            precio_total: productos.precio_total
        }

        const response = await APIInvoke.invokePOST('/api/productos', data);
        const idProducto = response._id

        if (idProducto === '') {
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
            navigate("/productos");
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
            setProductos({
                nombre: '',
                unidades,
                precio_unitario: '',
                precio_total: '',
               
            });
        }
    }

    const onSubmit = (e) => {
        e.preventdefault();
        CrearProducto();
    }

    return (
        <div className='wrapper'>
            <Navbar></Navbar>
            <SidebarContainer></SidebarContainer>
            <div className='content-wrapper'>
                <ContentHeader
                    titulo={"Agregar productos"}
                    breadCrumb1={"Listado de productos"}
                    breadCrumb2={"Agregar"}
                    ruta1={"/productos/agregar"}
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
                                        <label htmlFor='nombres'>   Nombre  </label>
                                        <input type='text'
                                            className='form-control'
                                            id='nombre'
                                            name='nombre'
                                            placeholder='Ingresar el nombre del producto'
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
                                        <label htmlFor='unidades'>   Número de unidades   </label>
                                        <input type='number'
                                            className='form-control'
                                            id='unidades'
                                            name='unidades'
                                            placeholder='Ingresar número de unidades'
                                            value={unidades}
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
                                        <label htmlFor='precio_unitario'>   Precio unitario </label>
                                        <input type='text'
                                            className='form-control'
                                            id='precio_unitario'
                                            name='precio_unitario'
                                            placeholder='Ingresar precio'
                                            value={precio_unitario}
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
                                        <label htmlFor='precio_total'>   Precio total  </label>
                                        <input type='text'
                                            className='form-control'
                                            id='precio_total'
                                            name='precio_total'
                                            placeholder='Ingresar precio'
                                            value={precio_total}
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

export default AgregarProducto
