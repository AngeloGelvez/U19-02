import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../assets/register.css"

export default function Register() {
    let fecha = new Date();
    const navigate = useNavigate();

    async function registroUsuario(event) {
       event.preventDefault();
       let {nombreUsu, emailUsu, contraUsu, documentoUsu, tipoUsu, estadoUsu, numDocuUsu, telUsu, deparUsu, ciudadUsu, direcUsu, fechaUsu} = event.target;

       try {
            const datos = await axios.post("http://localhost:3001/cliente", {
            nombre: nombreUsu.value,
            email:  emailUsu.value,
            password: contraUsu.value,
            tipoDocumento: documentoUsu.value,
            tipoUsuario:  tipoUsu.value,
            estadoUsuario: estadoUsu.value,
            numDocumento : numDocuUsu.value,
            telefono: telUsu.value,
            departamento: deparUsu.value,
            ciudad: ciudadUsu.value,
            direccion: direcUsu.value,
            registro: fechaUsu.value
            });
            navigate("/login");
       } catch (error) {
            alert("error");
       }
    }

  return (
    <div className="register-page principal-rg">
        <div className="register-box" style={{width: "40%"}}>
        <div className="card card-outline card-primary">
            <div className="card-header text-center">
            <Link to="/" className="h1 titulo">
                <b>MiDulceOnline</b>
            </Link>
            </div>
            <div className="card-body">
            <p className="login-box-msg">¡Registrate!</p>
            <form onSubmit={registroUsuario} method="post">
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        name="nombreUsu"
                        placeholder="Nombre"
                        required
                    />
                    <div className="input-group-append">
                        <div className="input-group-text">
                        <span className="fas fa-user"></span>
                        </div>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <input
                        type="email"
                        className="form-control"
                        name="emailUsu"
                        placeholder="Correo Electrónico"
                        required
                    />
                    <div className="input-group-append">
                        <div className="input-group-text">
                        <span className="fas fa-envelope"></span>
                        </div>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <input
                        type="password"
                        className="form-control"
                        name="contraUsu"
                        placeholder="Contraseña"
                        required
                    />
                    <div className="input-group-append">
                        <div className="input-group-text">
                        <span className="fas fa-lock"></span>
                        </div>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <select className="custom-select rounded-0" id="documento" name="documentoUsu">
                        <option defaultChecked value=" ">Tipo Documento</option>
                        <option value="CEDULA">Cedula</option>
                        <option value="TARJETA">Tarjeta</option>
                        <option value="NIT">Nit</option>
                    </select>
                    <div className="input-group-append">
                        <div className="input-group-text">
                        <span className="fas fa-lock"></span>
                        </div>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <select className="custom-select rounded-0" id="tipoUsuario" name="tipoUsu">
                        <option defaultChecked value=" ">Tipo Usuario</option>
                        <option value="CLIENTE">Cliente</option>
                        <option value="PROVEEDOR">Proveedor</option>
                        <option value="MASTER">Master</option>
                    </select>
                    <div className="input-group-append">
                        <div className="input-group-text">
                        <span className="fas fa-lock"></span>
                        </div>
                    </div>
                </div>
                <div className="input-group mb-3" hidden>
                    <select className="custom-select rounded-0" id="estado" name="estadoUsu">
                        <option defaultChecked value="ACTIVO">Activo</option>
                        <option value="BLOQUEADO">Bloqueado</option>
                    </select>
                    <div className="input-group-append">
                        <div className="input-group-text">
                        <span className="fas fa-lock"></span>
                        </div>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <input
                        type="number"
                        className="form-control"
                        name="numDocuUsu"
                        placeholder="Número Documento"
                        required
                    />
                    <div className="input-group-append">
                        <div className="input-group-text">
                        <span className="fas fa-lock"></span>
                        </div>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <input
                        type="number"
                        className="form-control"
                        name="telUsu"
                        placeholder="Telefono"
                        required
                    />
                    <div className="input-group-append">
                        <div className="input-group-text">
                        <span className="fas fa-lock"></span>
                        </div>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <select className="custom-select rounded-0" id="departamento" name="deparUsu">
                        <option defaultChecked value=" ">Departamento</option>
                        <option value="CLIENTE">Santander</option>
                        <option value="PROVEEDOR">Cundinamarca</option>
                        <option value="MASTER">Tolima</option>
                    </select>
                    <div className="input-group-append">
                        <div className="input-group-text">
                        <span className="fas fa-lock"></span>
                        </div>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        name="ciudadUsu"
                        placeholder="Ciudad"
                        required
                    />
                    <div className="input-group-append">
                        <div className="input-group-text">
                        <span className="fas fa-lock"></span>
                        </div>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        name="direcUsu"
                        placeholder="Dirección"
                        required
                    />
                    <div className="input-group-append">
                        <div className="input-group-text">
                        <span className="fas fa-lock"></span>
                        </div>
                    </div>
                </div>
                {/*REGISTRO FECHA, CON FUNCION DATE() */}
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        name="fechaUsu"
                        placeholder={fecha.toLocaleDateString()}
                        readOnly
                        value={fecha.toLocaleDateString()}
                    />
                </div>
                <div className="row">
                <div className="col-8">
                    <div className="icheck-primary">
                    <input
                        type="checkbox"
                        id="agreeTerms"
                        name="terminos"
                        value="agree"
                        required
                    /> 
                    <label className="p-1" >
                        Acepto los <Link to="#">terminos y condiciones</Link>
                    </label>
                    </div>
                </div>

                <div className="col-4 btn-rg">
                    <button type="submit" className="btn btn-block">
                    Registrar
                    </button>
                </div>
                </div>
            </form>
            <Link to="/login" className="text-center login-rg">
                ¿Ya tienes una cuenta? Inicia sesión.
            </Link>
            </div>
        </div>
        </div>
    </div>
  );
}
