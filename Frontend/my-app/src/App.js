//IMPORTACIÓN DE ESTILOS
import Home from "./pages/admin/home";
import Login from "./pages/auth/login";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./config/private";
import Register from "./pages/auth/register";

function App() {
  return (
    <div>
      <Routes>
        {/*Aca va mi menu*/}
        <Route
          path=""
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      {/*FOOTER DE MI PAGINA WEB*/}
      <footer className="text-light" style={{backgroundColor: "#1e272e"}}>
        <div className="p-1 fs-3 d-flex" style={{justifyContent: "space-evenly"}}>
          <div className="p-4" style={{width: "40%"}}>
            <a href="#" style={{color: "#D69764", fontSize: "25px"}}>
              MiDulceOnline
            </a>
            <p>MiDulceOnline es una propuesta de plataforma web para venta de dulces tipicos colombiano. Permite el registro de cualquier persona que quiera ofrecer sus productos.</p>
          </div>
          <div className="p-3">
            <h6>Servicios</h6>
            <ul style={{listStyle: "none"}}>
              <li>Venta de productos</li>
              <li>Publicación de productos</li>
              <li>Compra de productos</li>
            </ul>
          </div>
          <div className="p-3">
            <h6>Contactos</h6>
            <ul style={{listStyle: "none"}}>
              <li>Colombia, CL 10012, UIS</li>
              <li>info@example.com</li>
              <li>+57 234 567 88</li>
              <li>+01 234 567 89</li>
            </ul>
          </div>
        </div>
        <div className="p-3 fs-3">
          <strong>
            Copyright © 2022. Todos los derechos reservados.
          </strong>
        </div>
      </footer>
    </div>
  );
}

export default App;
