/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, {useEffect,useState} from "react";
import axios from 'axios';
import './Blog.css';

function Blog(){
    const [blogs,setBlogs]= useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3001/api/blogs')
        .then(response =>{
            setBlogs(response.data);
        })
        .catch(error =>{
            console.error('Error obteniendo los blogs: ',error);
        });
    },[]);
    return (
    <div>
        <h2 className="title">Blog</h2>
        {Array.isArray(blogs) ? blogs.map(blog=>(
            <div key = {blog._id}>
                <h3>{blog.title}</h3>
                <p>{blog.content}</p>
                <p>{blog.author}</p>
                <p>{blog.date}</p>
            </div>
        )): <p>Error cargando blogs</p>}
    </div>
    ) ;
}

export default Blog;