require('dotenv').config({path:".env.local"});
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useFindAndModify:false,
    useUnifiedTopology:true
});

mongoose.Promise = global.Promise;
mongoose.connection.on('error',(error)=>{
    console.log('Erro',error.message);
});

const server = express();
server.use(cors());
server.options ( '*' ,  cors() )
server.use(express.json());
server.use(express.urlencoded({ extended: true}));
server.use(express.static(__dirname + '/public'));
server.use('/',routes);

server.listen(process.env.PORT,()=>{
    console.log('funcionando na ',process.env.BASE);
});
