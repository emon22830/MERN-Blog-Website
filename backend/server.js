import express from "express"
import dotenv from "dotenv"
import connectDB from "./database/db.js"
dotenv.config()
const PORT = process.env.PORT || 300
const app = express()



app.listen(PORT, () =>{
    connectDB()
console.log(`Server listen at port ${PORT}`);
})



