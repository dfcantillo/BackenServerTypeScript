// configuración para ejecutar el serverExpress en typeScript
// Requires
import express = require('express');
import path = require('path');



export default class Server{
    public app: express.Application;//express use
    public port: number;

    constructor(puerto:number){
        this.port = puerto;
        this.app = express();
    }
// inilizalizar
    static init(puerto :number){
        return new Server(puerto);
    }


    private publicFolder(){
        const publicPath = path.resolve(__dirname,'../../public');
        this.app.use(express.static(publicPath));//permite levantar el cliente desde el servidor
    }

    start(callback:Function){
        // poner a escuchar el express
        this.app.listen(this.port,callback);
        this.publicFolder();
    }

}
