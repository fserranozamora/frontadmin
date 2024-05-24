import React, { useState, useEffect } from "react";
import ContentHeader from "../../componentes/ContentHeader";
import Footer from "../../componentes/Footer";
import Navbar from "../../componentes/Navbar";
import APIInvoke from "../../configuracion/APIInvoke";
import SidebarContainer from "../../componentes/SidebarContainer";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const AgregarProductos = () => {
const navigate = useNavigate();

const [productos, setProductos] = useState ({
    nombre_producto: "",
    unidades:"",
    precio_unitario:"",
    precio_total:""
    
})

const {nombre_producto, unidades, precio_unitario, precio_total} = productos
useEffect(()=>{
    document.getElementById("nombre_producto").focus();
},[])

const onChange =(e) =>{
    setProductos({
        ...productos,
    [e.target.name]: e.target.value
    })

}

    const CrearProductos = async () => {

        const data = {
            nombre_producto: productos.nombre_producto,
            unidades: productos.unidades,
            precio_unitario: productos.precio_unitario,
            precio_total: productos.precio_total,
        }

        const response = await APIInvoke.invokePOST('/api/productos', data);
        const idProducto = response._id;

        if (idProducto === ''){
            const msg = "Hubo un error al agregar un producto";
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

            const msg = "El producto fue agregado con exito";
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

            setProductos({
                nombre_producto: "",
                unidades:"",
                precio_unitario:"",
                precio_total:""
            });

        }
    }

    const onSubmit =(e) => {
        e.preventDefault();
        CrearProductos();
    }

  return (

    <div className="wrapper">
    <Navbar></Navbar>
    <SidebarContainer></SidebarContainer>

    <div className="content-wrapper">

        <ContentHeader
            titulo={"Agregar Productos"}
            breadCrumb1={"Listado de Productos"}
            breadCrumb2={"Agregar"}
            ruta1={"/productos/agregar"} 
        />
        

        <seccion className="content">
                    <div className="card">
                        <div className="card-header">
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
                            <form onSubmit={onSubmit}>
                            <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-gift"/>
                                    </div>
                                </div>

                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="nombre_producto">Nombre producto</label>
                                        <input type="text"
                                        className="form-control"
                                        id='nombre_producto'
                                        name='nombre_producto'
                                        placeholder="Ingrese el nombre del producto"
                                        value={nombre_producto}
                                        onChange={onChange}
                                        required                                        
                                        />                                  
                                    </div>
                                </div>

                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-check"/>
                                    </div>
                                </div>

                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="unidades">Unidades</label>
                                        <input type="number"
                                        className="form-control"
                                        id='unidades'
                                        name='unidades'
                                        placeholder="Ingrese las unidades del producto"
                                        value={unidades}
                                        onChange={onChange}
                                        required                                        
                                        />                                  
                                    </div>
                                </div>

                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-money-bill"/>
                                    </div>
                                </div>

                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="precio_unitario">Precio unitario</label>
                                        <input type="text"
                                        className="form-control"
                                        id='precio_unitario'
                                        name='precio_unitario'
                                        placeholder="Ingresar su precio unitario"
                                        value={precio_unitario}
                                        onChange={onChange}
                                        required                                        
                                        />                                  
                                    </div>
                                </div>

                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-money-bill"/>
                                    </div>
                                </div>

                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="precio_total">Precio total</label>
                                        <input type="text"
                                        className="form-control"
                                        id='precio_total'
                                        name='precio_total'
                                        placeholder="Ingrese el precio total"
                                        value={precio_total}
                                        onChange={onChange}
                                        required                                        
                                        />                                  
                                    </div>
                                </div>

                                <div className="card-footer">
                                    <button type="submit" className="btn btn-primary">Agregar</button>
                                    <b>&nbsp;</b>&nbsp;
                                    <a href="/productos">
                                        <button type="button" className="btn btn-danger">
                                            Cancelar
                                        </button>
                                    </a>
                                </div>

                            </form>
                        </div>
                    </div>
                </seccion>
            </div>
            <Footer></Footer>
        </div>
  )
}

export default AgregarProductos