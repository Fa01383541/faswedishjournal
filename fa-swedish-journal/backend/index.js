/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require('express');
const mongoose = require('mongoose');
const db = require('./db');
const apiRoutes = require('./routes/api');

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