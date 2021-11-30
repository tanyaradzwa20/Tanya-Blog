const router = require("express").Router();
const Blog = require("../models/Blog");
const bodyParser = require("body-parser")

const urlencodedParser = bodyParser.urlencoded({extended:false})


router.get("/compose", (req,res) =>{
    res.render("composeBlog")
})

.post("/compose", urlencodedParser, (req,res) =>{
    console.log(req.body);
    
    const {title, content} = req.body;
    if(!title || !content ) return  res.send("Please enter all details")

    const Blog = new Blog(
        {title:title, 
        content:content});
        newBlog.save()

    .then(()=>{
        console.log("Blog Saved");
        res.redirect('/')
    })

    .catch((err)=>{
        console.log(err)
    })
})

module.exports = router;