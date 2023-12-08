/* eslint-disable no-unused-vars */
import './main.css'
import React,{Suspense} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


const Main = React.lazy(() => import('./main'));
const Blog = React.lazy(() => import('./Blog'));
const Video = React.lazy(() => import('./Video'));
const CurrencyEx = React.lazy(() => import('./CurrencyEx'));

function App() {
  return (
    <>
    <h1>Välkommen till Fa Swedish Journal!</h1>
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Main</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/video">Video</Link></li>
          <li><Link to="/currency-exchange">Tasa de Cambio</Link></li>
        </ul>
      </nav>
      <Suspense fallback ={<div>Cargando...</div>}>
        <Routes>
          <Route path="/" exact component={Main}/>
          <Route path="/blog" component={Blog}/>
          <Route path="/Video" component={Video}/>
          <Route path="/currency-exchange" component={CurrencyEx}/>
        </Routes>
      </Suspense>
    </Router>
    </>
  );
}

export default App
