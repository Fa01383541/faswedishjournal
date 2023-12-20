/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import {db} from './db.js';
import {router as apiRoutes} from './routes/api.js';
import Blog from './models/Blog.js'

const app = express();

app.use(cors({origin: 'http://localhost:5173'}));

app.use('/api',apiRoutes);

app.use(express.json());

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});