import express from 'express'

import cors from 'cors'

const app =express();


const corsOrigin = process.env.CORS_ORIGIN || 'http://localhost:5173'
app.use(cors({
    origin: corsOrigin, 
    credentials:true 
}))


export default app; 