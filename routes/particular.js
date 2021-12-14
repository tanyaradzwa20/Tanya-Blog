const router = require("express").Router();
const Blog = require("../models/Blog");

router.get("/particular", (req,res) =>{
    res.render("particularBlog")
})
module.exports = router;