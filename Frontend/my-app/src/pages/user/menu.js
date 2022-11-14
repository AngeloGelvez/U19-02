import React, { useState } from "react";
import "../../assets/menu.css";
import { Link, Outlet } from "react-router-dom";

export default function Menu() {
  const [itemProducto, setItemProducto] = useState(false);
  const [itemUsuario, setItemUsuario] = useState(false);

  return (
    <div>
      <nav className="navbar navbar-expand-lg backg">
        <div className="container-fluid">
          <Link className="navbar-brand titulo" to="#" style={{fontSize: "25px"}}>
            MiDulceOnline
          </Link>
          <div className="d-flex" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 opcionesMenu">
              <li className="nav-item">
                <Link className="nav-link active texto" aria-current="page" to="#">
                  Nosotros
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle texto" role="button" onClick={() => {
                  setItemProducto(!itemProducto);
                  setItemUsuario(false);
                }}>
                  Productos
                </Link>
                <ul className={"desplegable dropdown-menu" + (itemProducto? "show": "")}>
                  <li><Link className="dropdown-item" to="#" onClick={() => {
                    setItemProducto(false);
                  }}>Consultar</Link></li>
                  <li><Link className="dropdown-item" to="#" onClick={() => {
                    setItemProducto(false);
                  }}>Crear Producto</Link></li>
                  <hr />
                  <li><Link className="dropdown-item" to="#" onClick={() => {
                    setItemProducto(false);
                  }}>Mis Productos</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle texto" role="button" onClick={() => {
                  setItemUsuario(!itemUsuario);
                  setItemProducto(false);
                }}>
                  Usuario
                </Link>
                <ul className={"desplegable2 dropdown-menu" + (itemUsuario? "show": " ")}>
                  <li><Link className="dropdown-item" to="/home/perfil" onClick={() => {
                    setItemUsuario(false);
                  }}>Perfil</Link></li>
                  <hr />
                  <li><Link className="dropdown-item" to="#" onClick={() => {
                    setItemUsuario(false);
                  }}>Actualizar Cuenta</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/*CONTENIDO DEL PERFIL */}
      <div>
        <Outlet />
      </div>
    </div>
  );
}
