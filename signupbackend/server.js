//Simplifies front end back end communication
const express = require('express')
const app = express()
//Simplifies back end mongodb communication
const mongoose = require("mongoose")
//Allows passing in hidden variables with a .env file.
const dotenv = require("dotenv")
//Allows communication with routes.js
const routesUrls = require('./routes/routes')

const cors = require("cors")

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database connected!"))

app.use(express.json())
app.use(cors())
app.use("/app", routesUrls)
app.listen(4000, () => console.log("server listening"))