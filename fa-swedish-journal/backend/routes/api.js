/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import express from 'express';
import Blog from '../models/Blog.js';
const router = express.Router();

router.post('/blogs', async (req,res)=>{
    const blog = new Blog({
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
    });
    try{
        const newBlog = await blog.save();
        res.status(201).json(newBlog);
    }catch(error){
        res.status(400).json({message: error.message})
    }
});

router.get('/blogs', async(req,res)=>{
    try{
        const blogs = await Blog.find();
        res.json(blogs);
    }catch(error){
        res.status(500).json({message:error.message});
    }
});


export {router}