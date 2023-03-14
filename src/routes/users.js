import {Router} from 'express';
const routerUser = Router();
import fetch from 'node-fetch';
routerUser.get('/',async (req,res)=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await response.json()
        res.json(users)
    })
export default routerUser