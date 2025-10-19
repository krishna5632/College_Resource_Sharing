
import app from "./app.js";
import connectDB from "./db/index.js";

import dotenv from 'dotenv'
dotenv.config({
    path:'./.env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT ||4000,()=>{
        console.log(`server is running on port ${process.env.PORT ||4000}`)
    })
})
.catch(()=>{
    console.log("MongoDB connection failed")
}) 