const express = require('express');

const swaggerUI = require('swagger-ui-express')

const config = require('../config.js');

const user = require('./components/user/network');
const auth = require('./components/auth/network');
// const post = require('./components/post/network');
const errors = require('../network/errors');

const app = express();


// express ya puede interpretar los json y se utiliza esta linea en vez de intalar body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// swagger
const swaggerDoc = require('./swagget.json')

//ROUTER
app.use('/api/user', user);
app.use('/api/auth', auth);
//quitamos post para crearle su propio mibro servicio
// app.use('/api/post', post);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc))

app.use(errors);

app.listen(config.api.port, () => {
    console.log('Api escuchando en el puerto ', config.api.port);
});