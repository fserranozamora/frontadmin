import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ContentHeader from '../../componentes/ContentHeader.js';
import Footer from '../../componentes/Footer.js';
import Navbar from '../../componentes/Navbar.js';
import SidebarContainer from '../../componentes/SidebarContainer.js';
import APIInvoke from '../../configuracion/APIInvoke.js';

const EditarCliente = () => {

    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [cedula, setCedula] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');
    const navigate = useNavigate ();
    const { id } = useParams();

    const editarCliente = async (e) => {
        e.preventDefault();
        await APIInvoke.invokePUT(`/api/clientes/${id}`, {
            nombres: nombres,
            apellidos: apellidos,
            cedula: cedula,
            correo: correo,
            telefono: telefono,
            direccion: direccion
        })
        navigate('/clientes');
    }

    useEffect(() => {
        getClientesID()
        // eslint-disable-next-line
    }, []);

    const getClientesID = async () => {
        const resul = await APIInvoke.invokeGET(`${id}`)
        setNombres(resul.data.nombres)
        setApellidos(resul.data.apellidos)
        setCedula(resul.data.cedula)
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
                    titulo={"Editar clientes"}
                    breadCrumb1={"Listado de clientes"}
                    breadCrumb2={"Editar"}
                    ruta1={"/clientes/editar"}
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
                            <i className='fa fa-solid fa-minus'></i>
                        </button>
                        <div className='card-body'>
                            <form onSubmit={editarCliente}>
                                <div className='card-body'>
                                    <div className='form-group'>
                                        <label htmlFor='nombres'>   Nombres   </label>
                                        <input type='text'
                                            className='form-control'
                                            id='nombres'
                                            name='nombres'
                                            placeholder='Ingresar los nombres del cliente'
                                            value={nombres}
                                            onChange={(e) => setNombres(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='input-group-append'>
                                    <div className='input-group-text'>
                                        <span className='fa fa-solid fa-user' />
                                    </div>
                                </div>

                                <div className='card-body'>
                                    <div className='form-group'>
                                        <label htmlFor='apellidos'>   Apellidos   </label>
                                        <input type='text'
                                            className='form-control'
                                            id='apellidos'
                                            name='apellidos'
                                            placeholder='Ingresar apellidos'
                                            value={apellidos}
                                            onChange={(e) => setApellidos(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='input-group-append'>
                                    <div className='input-group-text'>
                                        <span className='fa fa-solid fa-address-card' />
                                    </div>
                                </div>

                                <div className='card-body'>
                                    <div className='form-group'>
                                        <label htmlFor='cedula'>   Cédula de ciudadanía   </label>
                                        <input type='number'
                                            className='form-control'
                                            id='cedula'
                                            name='cedula'
                                            placeholder='Ingresar cédula de ciudadanía'
                                            value={cedula}
                                            onChange={(e) => setCedula(e.target.value)}
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
                                            onChange={(e) => setTelefono(e.target.value)}
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
                                            onChange={(e) => setDireccion(e.target.value)}
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
export default EditarCliente