import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import sendMail from "./SendEmail.js"

dotenv.config()

const app = express()

//middleware
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.post("/sendEmail", (req, res) => {
    sendMail()
    res.send("Email sent")
})




//listen
app.listen(5000, () => {
    console.log(`server running on port 5000`);
})