import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';

const app = express();


const corsOrigin = process.env.CORS_ORIGIN || 'http://localhost:5173'
app.use(cors({
    origin: corsOrigin, 
    credentials:true 
}))


app.use(cookieParser()) 
// for middleware 


import userRouter from './routes/user.route.js'
app.use('/user',userRouter)


export default app; 


