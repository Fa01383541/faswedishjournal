/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, {useEffect,useState} from "react";
import axios from 'axios';
import './Blog.css';
import {Link} from 'react-router-dom';
import BlogForm from "./BlogComponents/BlogForm";

function Blog(){
    const [blogs,setBlogs]= useState([]);
    const [error,setError]=useState(null)
    useEffect(()=>{
        axios.get('http://localhost:3001/api/blogs')
        .then(response =>{
            setBlogs(response.data);
            setError(null);
        })
        .catch(error =>{
            console.error('Error obteniendo los blogs: ',error);
            setError(error.message);
        });
    },[]);
    return (
    <div>
        <h2 className="title">Blog</h2>
        <BlogForm/>
        {error && <p>Error cargando blogs: {error}</p>}
        {Array.isArray(blogs) && blogs.map(blog=>(
            <div key = {blog._id} className="blog-post">
                <h3>{blog.title}</h3>
                <p>{blog.content}</p>
                <p>{blog.author}</p>
                <p>{new Date(blog.date).toLocaleDateString()}
                </p>
                <Link to={`/blogs/${blog._id}`}>Leer más</Link>
            </div>
        ))}
    </div>
    );
}

export default Blog;