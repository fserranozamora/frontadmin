import React, {Fragment} from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Login from "./paginas/auth/Login";
import Registro from "./paginas/auth/Registro";
import Home from "./Home";
import MostrarClientes from "./paginas/modulos/MostrarClientes";
import AgregarClientes from "./paginas/modulos/AgregarClientes";
import EditarClientes from "./paginas/modulos/EditarClientes";
import MostrarProductos from "./paginas/modulos/MostrarProductos";
import AgregarProductos from "./paginas/modulos/AgregarProductos";
import EditarProductos from "./paginas/modulos/EditarProductos";



function App() {
  return (
    <div className="App">
      <Fragment>
        <Router>
          <Routes>
            <Route path="/" exact element ={<Login/>}></Route>
            <Route path="/Registro" exact element ={<Registro/>}></Route>
            <Route path="/home" exact element ={<Home/>}></Route>
            <Route path="/clientes" exact element ={<MostrarClientes/>}></Route>
            <Route path="/clientes/agregar" exact element ={<AgregarClientes/>}></Route>
            <Route path="/clientes/editar/:id" exact element ={<EditarClientes/>}></Route>
            <Route path="/productos" exact element ={<MostrarProductos/>}></Route>
            <Route path="/productos/agregar" exact element ={<AgregarProductos/>}></Route>
            <Route path="/productos/editar/:id" exact element ={<EditarProductos/>}></Route>

          </Routes>
        </Router>
      </Fragment>
    </div>
  );
}

export default App;