// Modules importations
const express = require("express");
const conndb = require("./Config/conn");
const appRoute = require("./Routes/route")
const server = express();
const port = 4000;

//Using json forma in the req and res
server.use(express.json());
server.use("/api",appRoute)

//Call connection methode to database
conndb();

server.listen(port,(err)=>{
    err?console.log(err):console.log(`Starting the server on .. http://localhost:${port}`);
})
