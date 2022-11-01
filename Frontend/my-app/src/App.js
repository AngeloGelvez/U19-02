//IMPORTACIÓN DE ESTILOS
import Home from "./pages/admin/home";
import Login from "./pages/auth/login";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (

    <Routes>
      {/*Aca va mi menu*/} 
      <Route path="" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
    </Routes>

  );
}

export default App;
