/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

router.get('/blogs',async(req,res)=>{
    try{
        const blogs = await Blog.find();
        res.json(blogs);
    }catch (error){
        res.status(500).json({message: error.message});
    }
});

module.exports = router;