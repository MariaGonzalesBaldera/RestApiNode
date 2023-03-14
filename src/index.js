import express from'express';
import morgan from 'morgan';
import routerIndex from './routes/index.js'
import routerMovie from './routes/movies.js'
import routerUser from './routes/users.js'
const app = express();
//setings
app.set('port',process.env.PORT || 3000)
app.set('json spaces',2)
//middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
//routes
app.use(routerIndex)
app.use("/api/movies",routerMovie)
app.use("/api/users",routerUser)
//starting the server
app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`)
})