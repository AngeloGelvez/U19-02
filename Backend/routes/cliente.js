const { Router } = require("express")
const {
  crearCliente,
  getClientes,
  getCliente,
  modificarCliente,
  borrarCliente,
} = require("../controllers/cliente")


const routerCliente = Router()

// ESTA ES LA RUTA PARA CREAR UN USUARIO
routerCliente.post("", crearCliente) //Vacio significa que tiene /cliente que esta en el server.js
routerCliente.get("", getClientes)
routerCliente.get("/:id", getCliente)
routerCliente.put("/modificar", modificarCliente)
routerCliente.delete("", borrarCliente)

module.exports = routerCliente
