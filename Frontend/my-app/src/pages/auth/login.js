import React, { useState } from "react";
import "../../App.css";
import "../../assets/login.css";
import registro from "./register";
import axios from "axios";
import { useNavigate } from "react-router-dom";

/*
NOMBRE DE LA PRIMERA LETRA DE LA FUNCION DEBE SER EN MAYUSCULA 
POR LO QUE ES UN COMPONENTE
*/
export default function Login() {
  const navigate = useNavigate();

  async function formularioLogin(event) {
    event.preventDefault();
    const { correo, contrasena } = event.target;

    try {
      const res = await axios.post("http://localhost:3001/auth/login", {
        email: correo.value,
        password: contrasena.value,
      });
      navigate("/");
      localStorage.setItem("token", res.data.token);
    } catch (error) {
      document.getElementById("cuadroAlert").removeAttribute("hidden");
    }
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
            <form onSubmit={formularioLogin}>
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
                    <input type="checkbox" />
                    <label className="check-rec">Recuerdame</label>
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
              <a href="/register" className="text-center">
                ¿Eres nuevo? Registrate
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="toast bg-danger fade show cuadroError" role="alert" aria-atomic="true" id="cuadroAlert" hidden>
          <div className="toast-header">
            <strong className="mr-auto">Error de inicio sesión!</strong>
            </div>
          <div className="toast-body">Credenciales Incorrectas, vuevelo a intentar.</div>
      </div>
    </div>
  );
}
