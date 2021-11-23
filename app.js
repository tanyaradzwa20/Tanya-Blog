const express = require("express");
const mongoose = require("mongoose");
const app = express()


//  middleware
app.use(express.urlencoded({extended: true}) )
app.use(express.static("public"))
app.set("view engine", "ejs")



app.listen(2000, () => console.log("server listening")) 