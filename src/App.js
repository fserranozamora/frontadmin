import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./paginas/auth/Login";
import Registro from "./paginas/auth/Registro";
import Home from "./Home";
import MostrarClientes from "./paginas/modulos/MostrarClientes.js";
import AgregarCliente from "./paginas/modulos/AgregarCliente.js";
import EditarCliente from "./paginas/modulos/EditarCliente.js";
import MostrarProducto from "./paginas/modulos/MostrarProducto.js";
import AgregarProducto from "./paginas/modulos/AgregarProducto.js";
import EditarProducto from "./paginas/modulos/EditarProducto.js";
import MostrarProveedor from "./paginas/modulos/MostrarProveedor.js";
import AgregarProveedor from "./paginas/modulos/AgregarProveedor.js";
import EditarProveedor from "./paginas/modulos/EditarProveedor.js";

function App() {
  return (
    <div className="App">
      <Fragment>
        <Router>
          <Routes>
            <Route path="/" exact element = {<Login />}></Route>
            <Route path="/registro" exact element = {<Registro />}></Route>
            <Route path="/home" exact element = {<Home />}></Route>
            <Route path="/clientes" exact element = {<MostrarClientes />}></Route>
            <Route path="/clientes/agregar" exact element = {<AgregarCliente />}></Route>
            <Route path="/clientes/editar" exact element = {<EditarCliente />}></Route>
            <Route path="/productos" exact element = {<MostrarProducto />}></Route>
            <Route path="/productos/agregar" exact element = {<AgregarProducto />}></Route>
            <Route path="/productos/editar" exact element = {<EditarProducto />}></Route>
            <Route path="/proveedores" exact element = {<MostrarProveedor />}></Route>
            <Route path="/proveedores/agregar" exact element = {<AgregarProveedor />}></Route>
            <Route path="/proveedores/editar" exact element = {<EditarProveedor />}></Route>
          </Routes>
        </Router>
      </Fragment>
     
    </div>
  );
}

export default App;
