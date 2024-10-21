import express from "express"
import cors from "cors"
import { ConnectDB } from "./config/db.js"
import DataRouter from "./routes/Route.js"

// app configuration

const app= express()
const port = 4000

app.use(express.json())
app.use(cors())


// db conection
ConnectDB()

// creating endpoints

app.use('/api/laptop',DataRouter)
app.use("/images",express.static('uploads'))

app.get("/",(req,res)=>{
    res.send("API WORKING ! congratulations")
})

app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
})

// for testing api extensions are used 
//like thunder client or postman
