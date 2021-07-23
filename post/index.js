const express = require('express');


const config = require('../config.js');
const post = require('./components/post/network');
const errors = require('../network/errors');

const app = express();


// express ya puede interpretar los json y se utiliza esta linea en vez de intalar body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//ROUTER
app.use('/api/post', post);


app.use(errors);

app.listen(config.post.port, () => {
    console.log('Api escuchando en el puerto ', config.post.port);
});