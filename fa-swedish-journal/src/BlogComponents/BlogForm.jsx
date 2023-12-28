/* eslint-disable no-unused-vars */
import React , {useState} from 'react';
import axios from 'axios';
import '../Blog.css';

function BlogForm(){
    const [title,setTitle]=useState('');
    const [content,setContent]=useState('');
    const [author,setAuthor]=useState('');

    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.post('http://localhost:3001/api/blogs',{
            title:title,
            content:content,
            author:author
        })
        .then(response =>{
            console.log(response.data);
        })
        .catch(error =>{
            console.error('Error creando el blog: ', error);
        });
    };
    return(
        <>
        <form onSubmit={handleSubmit}>
            <label>
                Título:
                <input type="text" value = {title} onChange={e=>setTitle(e.target.value)}/>
            </label>
            <label>
                Contenido:
                <textarea value={content} onChange={e=>setContent(e.target.value)}/>
            </label>
            <label>
                Autor:
                <input type="text" value={author} onChange={e=>setAuthor(e.target.value)}/>
            </label>
            <input type="submit" value="Enviar"/>
        </form>
        </>
    );
}

export default BlogForm;