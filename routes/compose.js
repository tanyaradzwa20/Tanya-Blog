const router = require("express").Router();
const Blog = require("../models/Blog");
const bodyParser = require("body-parser");
const multer = require('multer')
const urlencodedParser = bodyParser.urlencoded({extended:false})

// adding images
// const upload = multer({dest: 'images/'});
const storage =  multer.diskStorage({
    // destination for files
    destination: 'uploads',
    // add extension
    filename : function(request, file, callback){
        callback(null, Date.now() + file.fieldname + path.extname(file.originalname))
    },
});

// upload parameters for multer
const upload = multer({
      storage:storage,
   }) 
   .single('image')

router.post('/uploads', (req, res) => {
    upload(req, res, (err) =>{
        if (!req.file) {
            console.log("No file received");
            return res.send({
              success: false
            });
        
          } else {
            console.log('file received');
            return res.send({
              success: true
            })
          }

    })
   
  });




// adding blogs and title
router.post("/compose", urlencodedParser, (req,res) =>{
    console.log(req.body);
    
    const {title, content, image} = req.body;
    if(!title || !content ) return  res.send("Please enter all details")

    const blog = new Blog(
        {title:title, 
         content:content,
         image:image
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