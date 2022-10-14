const express = require("express");
const { welcome, addContact } = require("../Controllers/contact");

//Call route app froom express
const route = express.Router();

route.get("/welcome",welcome);

route.post("/addContact",addContact);

route.get("/getall",)


module.exports = route