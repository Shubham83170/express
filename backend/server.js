"Access-Control-allow-Origin"
const express = require('express')
const cors = require('cors')
const route = express();
require('dotenv').config();
const routed= require("./routes/myroutes")
require("./database/connection");

const port = process.env.port || 6800
 

route.use(cors())
route.use(routed)
route.use(express.json())

route.listen(port,()=>{
    console.log(`${port} port is running`);
})