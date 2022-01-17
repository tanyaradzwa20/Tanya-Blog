const router = require("express").Router();
const Blog = require("../models/Blog");
const bodyParser = require("body-parser");
const multer = require('multer')
const urlencodedParser = bodyParser.urlencoded({extended:false})
const path = require('path');


const storage =  multer.diskStorage({
    // destination for files
    destination: './public/uploads',
    // add extension
    filename : function(request, file, callback){
        callback(null, Date.now() + file.originalname)
    },
});

const upload = multer({ 
    storage:storage	})

// adding blogs and title
router.post("/compose", upload.single('Image'), (req,res) => {
    console.log(req.body);
 
    const blog = new Blog(
        {title:req.body.title, 
         content:req.body.content,
         image:req.file.filename,
        });
        
    blog.save()
        .then(()=>{
            console.log("Blog Saved");
            res.redirect('/')
        })
        .catch((err)=>{
            console.log(err)
        })
})

// compose router
router.get("/compose", (req,res) =>{
    res.render("composeBlog")
})

module.exports = router;