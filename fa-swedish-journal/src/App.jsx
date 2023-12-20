/* eslint-disable no-unused-vars */
import './App.css'
import React, {Suspense} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  Navbar from './Navbar';

const Home = React.lazy(()=>import('./Home'));
const Blog = React.lazy(()=>import('./Blog'));
const Video = React.lazy(()=>import('./Video'));
const CurrencyEx = React.lazy(()=>import('./CurrencyEx'))
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Suspense fallback ={
        <div>Cargando...</div>
      }>
        <Routes>
          <Route path= "/" element ={<Home/>}/>
          <Route path= "/blog" element ={<Blog/>}/>
          <Route path= "/video" element ={<Video/>}/>
          <Route path= "/currency-exchange" element ={<CurrencyEx/>}/>

        </Routes>
      </Suspense>
    </Router>
    
    </>
  );
}

export default App
