import React from "react";
import "../../assets/home.css";
import image from "../../assets/img_home.jpg";

export default function Home() {
  return (
    <div className="wrapper">
      {/*ESTA ES MI NAVEGACIÓN*/}
      <nav className="navbar navbar-expand menu-nav">
        <ul className="navbar-nav">
          <li className="nav-item d-none d-sm-inline-block">
            <a href="../../index3.html" className="miLogo">
              MiDulceOnline
            </a>
          </li>
        </ul>

        <ul className="navbar-nav ml-auto lista-menu">
          <li className="nav d-none d-sm-inline-block">
            <a href="../../index3.html" className="nav text1 posicion">
              Nosotros
            </a>
          </li>
          <li className="nav d-none d-sm-inline-block">
            <a href="#" className="nav text2 posicion">
              Ingresar
            </a>
          </li>
          <li className="nav d-none d-sm-inline-block">
            <a href="#" className="nav-link posicion boton">
              <button
                type="button"
                className="btn"
                style={{
                  background: "#DFD4CE",
                  borderRadius: "10px",
                  color: "#393D40",
                }}
              >
                Registrarme
              </button>
            </a>
          </li>
        </ul>
      </nav>
      
      <div className="wrapper contenedor">
        <aside className="aside1">
          <p>
            Encuentra tus dulces típicos colombianos, o aún mejor publica tus
            productos.
          </p>
          <button className="btn">Consultar</button>
        </aside>
        <aside className="aside2">
          <img loading="lazy" src={image} alt="torta de chocolate"></img>
        </aside>
      </div>
    </div>
  );
}
