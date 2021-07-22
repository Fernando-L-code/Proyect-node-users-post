const express = require('express');

const config = require('../config')
const router = require('./network')

const app = express();

// express ya puede interpretar los json y se utiliza esta linea 
//en vez de intalar body-parser

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Rutas
app.use('/', router);

app.listen(config.mysqlService.port, ()=>{
    console.log('Servicio de mysql escuchando en el puerto', config.mysqlService.port);

})