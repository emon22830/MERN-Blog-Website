import express from "express"
import dotenv from "dotenv"
import connectDB from "./database/db.js"
import useRoute from "./routes/user.route.js"
dotenv.config()
const PORT = process.env.PORT || 300
const app = express()

//default middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.use("/api/v1/user", useRoute)
// "http://localhost:5000/api/v1/user/register"

app.listen(PORT, () =>{
    connectDB()
console.log(`Server listen at port ${PORT}`);
})



