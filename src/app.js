const express = require('express');
const morgan= require('morgan');

const mysql= require('mysql');
const myConnection= require('express-myconnection');

const app= express();
const cors= require('cors');

app.set('port',3000);

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(myConnection(mysql,{
    host: 'localhost',
    user:'root',
    password: '1234',
    port: 3306,
    database: 'BD_Didactic'
}, 'single'));

app.use(require('./routes/cursos.router'));
app.use(require('./routes/areas.router'));
module.exports= app;