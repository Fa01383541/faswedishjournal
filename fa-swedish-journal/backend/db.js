/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/swedishblog',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console,'Error de conexion a MongoDB: '));
db.once('open',()=>{
    console.log('Conexion exitosa a MongoDB');
});

module.exports = db;