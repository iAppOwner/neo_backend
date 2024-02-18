const express = require('express');
const app = express();
const cors = require('cors')
const saveRoute = require('./router/saveRoute')
const db_connection = require("./modal/connection")

const port = process.env.PORT || 5000;

require('dotenv').config()

//CORS AND BODY CONFIGURATION
app.use(cors())
app.use(express.json())

//Custome Functions for DB Connection
db_connection()

//ROUTER CONFIGURATION
app.use("/api",saveRoute)

app.listen(port,()=>{
    console.log(`APP RUNNING ON PORT ${port}`)
})