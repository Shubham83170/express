const express = require('express')
const myapp = express();
require('dotenv').config();
const route= require("./routes/myroutes")
require("./database/connection");

const port = process.env.port || 6800
 

myapp.use(route)

myapp.listen(port,()=>{
    console.log(`${port} port is running`);
})