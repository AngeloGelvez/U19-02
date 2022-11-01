import React from "react";
import "../../App.css";
import "../../assets/login.css";
import axios from "axios";

/*
NOMBRE DE LA PRIMERA LETRA DE LA FUNCION DEBE SER EN MAYUSCULA 
POR LO QUE ES UN COMPONENTE
*/
export default function Login() {

  function formularioLogin(event) {
    event.preventDefault();
    const {correo, contrasena} = event.target;

    axios.post("http://localhost:3001/auth/login", { email: correo, contrasena: contrasena });

    console.log(correo.value);
    console.log(contrasena.value);
  }

  return (
    <div className="login-page iframe-mode principal">
      <div className="caja-login">
        <div className="card card-outline">
          <div className="card-header text-center">
            <a href="#" className="titulo">
              <b>MiDulceOnline</b>
            </a>
          </div>
          <div className="cuerpo">
            <form onSubmit={ formularioLogin }>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Correo Electrónico"
                  name="correo"
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Contraseña"
                  name="contrasena"
                />
              </div>
              <div className="row envio-form">
                <div className="col-7">
                  <div className="icheck-primary">
                    <input type="checkbox" id="recuerdame" />
                    <label for="recuerdame" className="check-rec" >Recuerdame</label>
                  </div>
                </div>
                <div className="col-5 btn-login">
                  <button type="submit" className="btn btn-block">
                    Iniciar Sesión
                  </button>
                </div>
              </div>
            </form>

            <p className="mb-1 text">
              <a href="forgot-password.html">He olvidado mi contraseña</a>
            </p>
            <p className="mb-0 text">
              <a href="register.html" className="text-center">
                ¿Eres nuevo? Registrate
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
