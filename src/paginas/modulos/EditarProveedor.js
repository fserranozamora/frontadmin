import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ContentHeader from '../../componentes/ContentHeader.js';
import Footer from '../../componentes/Footer.js';
import Navbar from '../../componentes/Navbar.js';
import SidebarContainer from '../../componentes/SidebarContainer.js';
import APIInvoke from '../../configuracion/APIInvoke.js';

const EditarProveedor = () => {

    const [nombre, setNombre] = useState('');
    const [nit, setNIT] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');
    const navigate = useNavigate ();
    const { id } = useParams();

    const editarProveedor = async (e) => {
        e.preventDefault();
        await APIInvoke.invokePUT(`/api/proveedores${id}`, {
            nombre: nombre,
            nit: nit,
            correo: correo,
            telefono: telefono,
            direccion: direccion
        })
        navigate('/proveedores');
    }

    useEffect(() => {
        getProveedoresID()
    }, []);

    const getProveedoresID = async () => {
        const resul = await APIInvoke.invokeGET(`${id}`)
        setNombre(resul.data.nombre)
        setNIT(resul.data.nit)
        setCorreo(resul.data.correo)
        setTelefono(resul.data.telefono)
        setDireccion(resul.data.direccion)
    }


  return (
    <div className='wrapper'>
            <Navbar></Navbar>
            <SidebarContainer></SidebarContainer>
            <div className='content-wrapper'>
                <ContentHeader
                    titulo={"Editar proveedores"}
                    breadCrumb1={"Listado de proveedores"}
                    breadCrumb2={"Proveedoresr"}
                    ruta1={"/proveedores/editar"}
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
                            <form onSubmit={editarProveedor}>
                                <div className='card-body'>
                                    <div className='form-group'>
                                        <label htmlFor='nombre'>   Nombre del proveedor   </label>
                                        <input type='text'
                                            className='form-control'
                                            id='nombre'
                                            name='nombre'
                                            placeholder='Ingresar el nombre del proveedor'
                                            value={nombre}
                                            onChange={(e) => setNombre(e.target.value)}
                                            required
                                        />
                                    </div>
                                    
                                </div>
                                <div className='input-group-append'>
                                    <div className='input-group-text'>
                                        <span className='fa fa-envelope' />
                                    </div>
                                </div>

                                <div className='card-body'>
                                    <div className='form-group'>
                                        <label htmlFor='nit'>   Nit del proveedor   </label>
                                        <input type='text'
                                            className='form-control'
                                            id='nit'
                                            name='nit'
                                            placeholder='Ingresar nit'
                                            value={nit}
                                            onChange={(e) => setNIT(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='input-group-append'>
                                    <div className='input-group-text'>
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
                                            placeholder='Ingresar correo electrónico'
                                            value={correo}
                                            onChange={(e) => setCorreo(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='input-group-append'>
                                    <div className='input-group-text'>
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
                                            onChange={(e) => setTelefono(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='input-group-append'>
                                    <div className='input-group-text'>
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
                                            onChange={(e) => setDireccion(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='input-group-append'>
                                    <div className='input-group-text'>
                                        <span className='fa fa-envelope' />
                                    </div>
                                </div>

                                <div className='card-footer'>
                                    <button type='submit' className='btn btn-primary'>   Guardar   </button>
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
// eslint-disable-next-line
export default EditarProveedor