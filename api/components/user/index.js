// const store = require('../../../store/dummy'); 
// const store = require('../../../store/mysql'); 
const config = require('../../../config');

let store;
if(config.remoteDB === true){
    store = require('../../../store/remote-mysql'); 
}else{
    store = require('../../../store/mysql'); 
}
const ctrl = require('./controller');


// convertimos nuestro contorlador de un objeto a una funcion
// con esto tenemos un controlador al que le inyectan el store
module.exports = ctrl(store);