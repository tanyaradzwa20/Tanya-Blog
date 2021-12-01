const PORT = process.env.PORT || 5000

const express = require("express");
const mongoose = require("mongoose");
const app = express()

// connecting to mongo database  
mongoose.connect("mongodb+srv://tanyaradzwa:tanyaradzwa2001@tanyablog.edblq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    userNewUrlParser: true,
    useUnifiedTopology: true},
    () => {console.log("connect to database was successful")}
);

//  middleware
app.use(express.urlencoded({extended: true}) )
app.use(express.static("public"))
app.set("view engine", "ejs")

//  routes
app.use(require("./routes/index"))
app.use(require("./routes/compose"))


app.listen(PORT) 