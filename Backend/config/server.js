const express = require("express")
const fileUpload = require("express-fileupload")
const cors = require("cors")
const routerCliente = require("../routes/cliente")
const routerProducto = require("../routes/producto")
const conexionDB = require("./database")

class Server {
  constructor() {
    this.port = 3001
    this.app = express()

    // MIDDLEWARES
    this.app.use(express.json())
    this.app.use(fileUpload({
      useTempFiles : true,
      tempFileDir : '/tmp/'
    }))
    this.app.use( cors() )
  
    this.app.listen(this.port, () => {
      console.log("se esta ejecutando la app puerto:",this.port)
    })

    this.routes()

    conexionDB()
  }

  routes() {

    this.app.use( "/cliente", routerCliente )
    this.app.use( "/producto", routerProducto )
    this.app.use( "/auth", require("../routes/auth") )

  }
}

module.exports = Server
