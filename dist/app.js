"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Requires
const server_1 = __importDefault(require("./server/server"));
const routes_1 = require("./routes/routes");
const mongoose = require("mongoose");
// inicializar variables
const server = server_1.default.init(3000); //inicia el servidor de express
// inicializar base de datos mongoDB
mongoose.connect('mongodb://localhost:27017/hospitalDB', (err) => {
    if (err)
        throw err;
    console.log('base de datos: \x1b[32m%s\x1b[0m', 'online', 'puerto:27017');
});
// Pone a correr todas las rutas que estan el archivo de rutas midelwer
server.app.use(routes_1.router);
//Se inicia el server el cual esta escuchando en el puerto 3000
server.start(() => {
    console.log('servidor corriendo en el puerto 3000: \x1b[32m%s\x1b[0m', 'online');
});
