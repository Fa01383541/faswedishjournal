/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import express from 'express';
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
});

const db = mongoose.connection;

db.on('error',(error)=>{
    console.error('Error de conexion a MongoDB: ', error);
    process.exit(1);
});

export {db}