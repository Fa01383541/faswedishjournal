/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import express from 'express';
import mongoose from 'mongoose';
import {db} from './db.js';
import {router as apiRoutes} from './routes/api.js';
import Blog from './models/Blog.js'

const app = express();

const nuevoBlog = new Blog({
  title: 'Mi primer blog',
  content: 'Contenido del blog...',
});

nuevoBlog.save((err, blogGuardado) => {
  if (err) return console.error(err);
  console.log('Blog guardado:', blogGuardado);
});

app.use('/api',apiRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});