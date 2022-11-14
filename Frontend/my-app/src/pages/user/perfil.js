import React from "react";
import img from "../../assets/usuario.png";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Perfil() {

    const obtenerCliente = axios.get("http://localhost:3001/cliente/63603ab9ae71dc8c80e79eed");

  return (
    <div className="col-md-auto" style={{padding: "20px 300px"}}>
      <div className="card card-outline">
        <div className="card-body box-profile">
          <div className="text-center">
            <img
              className="profile-user-img img-fluid img-circle"
              src={img}
              alt="User profile picture"
            />
          </div>
          <h3 className="profile-username text-center">Nina Mcintire</h3>
          <p className="text-muted text-center">PROVEEDOR</p>
          <ul className="list-group list-group-unbordered mb-3">
            <li className="list-group-item">
              <b>Seguidores</b> <Link className="float-right">1,322</Link>
            </li>
            <li className="list-group-item">
              <b>Siguiendo</b> <Link className="float-right">543</Link>
            </li>
            <li className="list-group-item">
              <b>Amigos</b> <Link className="float-right">13,287</Link>
            </li>
          </ul>
          <Link href="#" className="btn btn-block" style={{backgroundColor: "#d69764", color: "#f1edea"}}>
            <b>Seguir</b>
          </Link>
        </div>
      </div>
      <div className="card">
        <div className="card-header" style={{backgroundColor: "#d69764", color: "#f1edea"}}>
          <h3 className="card-title">Sobre mí</h3>
        </div>
        <div className="card-body">
          <strong>
            <i className="fas fa-book mr-1" /> Correo Electrónico
          </strong>
          <p className="text-muted">
            ejemplo@gmail.com
          </p>
          <hr />
          <strong>
            <i className="fas fa-map-marker-alt mr-1" /> Tipo Documento
          </strong>
          <p className="text-muted">CEDULA</p>
          <hr />
          <strong>
            <i className="fas fa-map-marker-alt mr-1" /> Documento
          </strong>
          <p className="text-muted">1099735178</p>
          <hr />
          <strong>
            <i className="fas fa-pencil-alt mr-1" /> Teléfono
          </strong>
          <p className="text-muted">
            <span className="tag tag-danger">318451952</span>
          </p>
          <hr />
          <strong>
            <i className="far fa-file-alt mr-1" /> Departamento
          </strong>
          <p className="text-muted">
            Santander
          </p>
          <hr />
          <strong>
            <i className="far fa-file-alt mr-1" /> Ciudad
          </strong>
          <p className="text-muted">
            Bucaramanga
          </p>
          <hr />
          <strong>
            <i className="far fa-file-alt mr-1" /> Dirección
          </strong>
          <p className="text-muted">
            Cra 2 # 20-45 barrio
          </p>
          <hr />
          <strong>
            <i className="far fa-file-alt mr-1" /> Día de registro
          </strong>
          <p className="text-muted">
            2022/07/26
          </p>
          <Link to="#" className="btn btn-primary btn-block">
            <b>Actualizar</b>
          </Link>
          <Link to="#" className="btn btn-block" style={{backgroundColor: "#e74c3c", color: "#f1edea"}}>
            <b>Eliminar Cuenta</b>
          </Link>
        </div>
      </div>
    </div>
  );
}
