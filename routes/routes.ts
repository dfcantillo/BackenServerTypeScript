import {Router,Request,Response,NextFunction} from 'express';

// intancia del router
export const router = Router();


router.get('/',(req:Request,resp:Response,next:NextFunction)=>{
     resp.status(400).json({ 
        ok: true,
        mensaje: 'Bienvenido al la server de difer' 
    })
});

router.get('/heroes',(req:Request ,resp: Response,next:NextFunction)=>{
        
        resp.status(200).json({
            ok:true,
            mensaje: "Mensaje realizado correctamente"
        });
});

router.get('/heroe/:id',(req:Request,resp:Response)=>{
    let id = req.params.id;

    resp.json({
        ok: true,
        mensaje: "Mensaje realizado correctamete",
        id: id
    })

})


