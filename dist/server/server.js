"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// configuración para ejecutar el serverExpress en typeScript
// Requires
const express = require("express");
const path = require("path");
class Server {
    constructor(puerto) {
        this.port = puerto;
        this.app = express();
    }
    // inilizalizar
    static init(puerto) {
        return new Server(puerto);
    }
    publicFolder() {
        const publicPath = path.resolve(__dirname, '../../public');
        this.app.use(express.static(publicPath)); //permite levantar el cliente desde el servidor
    }
    start(callback) {
        // poner a escuchar el express
        this.app.listen(this.port, callback);
        this.publicFolder();
    }
}
exports.default = Server;
