import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import path from 'path'
import router from './api-routes/router'

// initalize 
const app = express();
dotenv.config({path:path.resolve(__dirname,'../../variable.env')})

app.use(
    cors(),
    morgan('dev')
)
app.use('/api',router)
Promise.resolve(app.listen(process.env.PORT || 3000))
        .then((response)=>console.info('Server is running at port : ',process.env.PORT))
        .catch((error)=> console.error(error));