import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./paginas/auth/Login";
import Registro from "./paginas/auth/Registro";
import Home from "./Home";
import MostrarClientes from "./paginas/modulos/MostrarClientes.js";
import AgregarClientes from "./paginas/modulos/AgregarClientes.js";
import EditarCliente from "./paginas/modulos/EditarClientes.js";
import MostrarProductos from "./paginas/modulos/MostrarProductos.js";
import AgregarProducto from "./paginas/modulos/AgregarProducto.js";
import EditarProducto from "./paginas/modulos/EditarProducto.js";

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
            <Route path="/clientes/agregar" exact element = {<AgregarClientes />}></Route>
            <Route path="/clientes/editar" exact element = {<EditarCliente />}></Route>
            <Route path="/productos" exact element = {<MostrarProductos />}></Route>
            <Route path="/productos/agregar" exact element = {<AgregarProducto />}></Route>
            <Route path="/productos/editar" exact element = {<EditarProducto />}></Route>
          </Routes>
        </Router>
      </Fragment>
     
    </div>
  );
}

export default App;
