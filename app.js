const PORT = process.env.PORT || 3000
const express = require("express");
const mongoose = require("mongoose");
var bodyParser = require('body-parser')
const app = express()

// const tanyaMongoURI = "mongodb+srv://tanyaradzwa:tanyaradzwa2001@tanyablog.edblq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const pepeMongoURI = "dbRUI=mongodb+srv://pepe:lz7t71jKIxae76zG@uncommondb.tuzcs.mongodb.net/UncommonDB?retryWrites=true&w=majority"
              

// // connecting to mongo database  
mongoose.connect(pepeMongoURI,{useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => {
        app.listen(PORT)
        console.log("connect to database was successful")
    })
    .catch(err => console.log(err))


//  middleware
app.use(bodyParser.urlencoded({extended: true}) )
app.use(express.static('public/'))
app.set("view engine", "ejs")

//  routes
app.use(require("./routes/compose"))
app.use(require("./routes/index"))
app.use(require("./routes/blog"))


