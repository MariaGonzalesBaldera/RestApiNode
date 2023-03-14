import { Router } from 'express'
const routerIndex = Router()
routerIndex.get('/',(_req,res)=>{
        const data= {
            "name":"Maria",
            "apellido":"Gonzales"
        }
        res.json(data)
    })
export default routerIndex;