// eslint-disable-next-line no-unused-vars
import React from 'react';
import {Link } from 'react-router-dom';
import "./Navbar.css"

function Navbar(){
    return(
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/video">Video</Link></li>
          <li><Link to="/currency-exchange">Tasa de Cambio</Link></li>
        </ul>
      </nav>
    </>
    );
}

export default Navbar