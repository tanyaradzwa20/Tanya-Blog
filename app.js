const express = require("express");
const mongoose = require("mongoose");
const app = express()


// connecting to mongo database  
mongoose.connect("mongdb://localhost/tanya",{
    userNewUrlParser: true,
    useUnifiedTopology: true},
    () => {console.log("connected data database was successful")}
);

//  middleware
app.use(express.urlencoded({extended: true}) )
app.use(express.static("public"))
app.set("view engine", "ejs")

//  routes
app.use(require("./routes/index"))
app.use(require("./routes/compose"))


app.listen(2000, () => console.log("server listening")) 