import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ContentHeader from '../../componentes/ContentHeader.js';
import Footer from '../../componentes/Footer.js';
import Navbar from '../../componentes/Navbar.js';
import SidebarContainer from '../../componentes/SidebarContainer.js';
import APIInvoke from '../../configuracion/APIInvoke.js';

const EditarProducto = () => {

    const [nombre, setNombre] = useState('');
    const [unidades, setUnidades] = useState('');
    const [precio_unitario, setPrecioUni] = useState('');
    const [precio_total, setPrecioTotal] = useState('');
    const navigate = useNavigate ();
    const { id } = useParams();

    const editarProducto = async (e) => {
        e.preventDefault();
        await APIInvoke.invokePUT(`/api/productos${id}`, {
            nombre: nombre,
            unidades: unidades,
            precio_unitario: precio_unitario,
            precio_total: precio_total
        })
        navigate('/productos');
    }

    useEffect(() => {
        getProductosID()
    }, []);

    const getProductosID = async () => {
        const resul = await APIInvoke.invokeGET(`${id}`)
        setNombre(resul.data.nombre)
        setUnidades(resul.data.unidades)
        setPrecioUni(resul.data.precio_unitario)
        setPrecioTotal(resul.data.precio_total)
    }


  return (
    <div className='wrapper'>
            <Navbar></Navbar>
            <SidebarContainer></SidebarContainer>
            <div className='content-wrapper'>
                <ContentHeader
                    titulo={"Editar productos"}
                    breadCrumb1={"Listado de productos"}
                    breadCrumb2={"Editar"}
                    ruta1={"/productos/editar"}
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
                            <form onSubmit={editarProducto}>
                                <div className='card-body'>
                                    <div className='form-group'>
                                        <label htmlFor='nombre'>   Nombre del producto   </label>
                                        <input type='text'
                                            className='form-control'
                                            id='nombre'
                                            name='nombre'
                                            placeholder='Ingresar el producto'
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
                                        <label htmlFor='unidades'>  Unidades   </label>
                                        <input type='number'
                                            className='form-control'
                                            id='unidades'
                                            name='unidades'
                                            placeholder='Ingresar número de unidades'
                                            value={unidades}
                                            onChange={(e) => setUnidades(e.target.value)}
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
                                        <label htmlFor='precio_unitario'>   Precio unitario  </label>
                                        <input type='text'
                                            className='form-control'
                                            id='precio_unitario'
                                            name='precio_unitario'
                                            placeholder='Ingresar precio unitario'
                                            value={precio_unitario}
                                            onChange={(e) => setPrecioUni(e.target.value)}
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
                                        <label htmlFor='precio_total'>   Precio total  </label>
                                        <input type='text'
                                            className='form-control'
                                            id='precio_total'
                                            name='precio_total'
                                            placeholder='Ingresar precio total'
                                            value={precio_total}
                                            onChange={(e) => setPrecioTotal(e.target.value)}
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
export default EditarProducto