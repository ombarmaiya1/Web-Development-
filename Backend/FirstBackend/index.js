import express from "express"
import dotenv from "dotenv"
dotenv.config()

const app = express();

app.get("/" , (req,res) => {
    console.log("Server started")
    res.json({message: "welcome to first backend project "})
})

const port = process.env.PORT || 5000;

app.listen(port, () =>{
    console.log(`Sever Started at ${port}`);
    
})