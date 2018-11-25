// Requires
import Server from './server/server';
import { router } from './routes/routes';
import mongoose =  require('mongoose');
import { MongoError } from 'mongodb';



// inicializar variables
const server = Server.init(3000);//inicia el servidor de express

// inicializar base de datos mongoDB
mongoose.connect('mongodb://localhost:27017/hospitalDB',(err:MongoError) =>{
    if(err) throw err;
    console.log('base de datos: \x1b[32m%s\x1b[0m','online' , 'puerto:27017');
    

});

// Pone a correr todas las rutas que estan el archivo de rutas midelwer
server.app.use(router);

//Se inicia el server el cual esta escuchando en el puerto 3000
server.start(()=>{
    console.log('servidor corriendo en el puerto 3000: \x1b[32m%s\x1b[0m','online');
});


